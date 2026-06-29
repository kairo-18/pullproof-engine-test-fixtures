# PullProof Engine Test Fixtures

This repository contains fixture pull requests for automated integration testing of the [PullProof](https://pullproof.ai) deployment engine.

PullProof is a QA-focused pull request preview platform that deploys PRs as ephemeral preview environments. Each branch in this repo represents a distinct scenario — successful deployments, configuration errors, build failures, and more.

**This is not a production application.** Every fixture is minimal, deterministic, and fast to build.

## Scenario listing

| PR # | Scenario | Expected Status |
|------|----------|-----------------|
| 1 | `single-express-api` | RUNNING |
| 2 | `fullstack-single-container` | RUNNING |
| 3 | `frontend-backend-separated` | RUNNING |
| 4 | `missing-dockerfile` | FAILED |
| 5 | `invalid-preview-yml` | FAILED |
| 6 | `docker-build-failure` | FAILED |
| 7 | `notes-crud-app` | RUNNING |
| 8 | `postgres-three-tier` | RUNNING |
