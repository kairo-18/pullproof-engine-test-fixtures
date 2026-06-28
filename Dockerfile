FROM node:20-alpine
WORKDIR /app
RUN echo "Intentional PullProof build failure" && exit 1
