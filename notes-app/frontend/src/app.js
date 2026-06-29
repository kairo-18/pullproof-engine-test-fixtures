const listEl = document.getElementById('notes-list');
const formEl = document.getElementById('note-form');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

async function loadNotes() {
  const res = await fetch('/api/notes');
  const notes = await res.json();
  listEl.innerHTML = notes.map(n => `
    <div class="note">
      <h3>${escapeHtml(n.title)}</h3>
      <p>${escapeHtml(n.content)}</p>
      <small>${n.created_at}</small>
      <button class="delete" data-id="${n.id}">Delete</button>
    </div>
  `).join('');
}

formEl.addEventListener('submit', async e => {
  e.preventDefault();
  await fetch('/api/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: titleInput.value, content: contentInput.value })
  });
  titleInput.value = '';
  contentInput.value = '';
  loadNotes();
});

listEl.addEventListener('click', async e => {
  if (!e.target.classList.contains('delete')) return;
  await fetch(`/api/notes/${e.target.dataset.id}`, { method: 'DELETE' });
  loadNotes();
});

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

loadNotes();
