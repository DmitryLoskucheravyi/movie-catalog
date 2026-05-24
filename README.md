# Movie Catalog API

Production-grade REST API для каталогу фільмів.

Проєкт створений на Node.js + TypeScript з використанням сучасного backend stack:

* Express
* MongoDB
* Mongoose
* Docker
* Docker Compose
* Jest
* Supertest
* Zod
* MongoDB Atlas

---

# Технології

## Backend

* Node.js
* TypeScript
* Express
* MongoDB
* Mongoose
* Zod

## Testing

* Jest
* Supertest
* mongodb-memory-server

## DevOps

* Docker
* Docker Compose
* MongoDB Atlas
* MongoDB Compass

---

# Можливості API

## Movies CRUD

* Create movie
* Get all movies
* Get movie by ID
* Update movie
* Delete movie

## Додаткові можливості

* Filtering
* Pagination
* Sorting
* Validation через Zod
* Global error handling
* Dockerized infrastructure
* Persistent MongoDB storage
* Healthcheck

---

# Структура проєкту

```text
/src
  /config
    database.ts

  /middleware
    errorHandler.ts
    validate.ts

  /models
    movie.model.ts

  /routes
    movie.ts

  /schemas
    movie.schema.ts

  /storage
    movie.ts

  app.ts
  server.ts

/tests
  setup.ts
  movie.test.ts
  model.test.ts

.env.example
Dockerfile
compose.yaml
package.json
tsconfig.json
```

---

# Встановлення проєкту

## 1. Clone repository

```bash
git clone YOUR_REPOSITORY_URL
```

## 2. Перейти у папку проєкту

```bash
cd movie-catalog-api
```

## 3. Встановлення залежностей

```bash
npm install
```

---

# Environment Variables

Створити файл:

```text
.env
```

Приклад:

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

DATABASE_NAME=movie_catalog
```

---

# Запуск проєкту

## Development mode

```bash
npm run dev
```

## Build TypeScript

```bash
npm run build
```

## Production start

```bash
npm start
```

---

# Docker

## Build image

```bash
docker build -t movie-catalog-api .
```

## Run container

```bash
docker run -p 3000:3000 --env-file .env movie-catalog-api
```

---

# Docker Compose

## Запуск infrastructure

```bash
docker compose up --build
```

## Зупинка infrastructure

```bash
docker compose down
```

---

# API Endpoints

## Healthcheck

### GET

```http
/health
```

---

## Get all movies

### GET

```http
/movies
```

---

## Get movie by ID

### GET

```http
/movies/:id
```

---

## Create movie

### POST

```http
/movies
```

### Request body

```json
{
  "title": "Interstellar",
  "director": "Christopher Nolan",
  "year": 2014,
  "genre": "Sci-Fi",
  "rating": 9
}
```

---

## Update movie

### PATCH

```http
/movies/:id
```

---

## Delete movie

### DELETE

```http
/movies/:id
```

---

# Pagination

Приклад:

```http
/movies?page=1&limit=10
```

---

# Filtering

Приклад:

```http
/movies?genre=Sci-Fi
```

---

# Sorting

Приклад:

```http
/movies?sortBy=year&order=desc
```

---

# Тестування

## Запуск тестів

```bash
npm test
```

## Coverage

```bash
npm test -- --coverage
```

---

# MongoDB Compass

## Atlas connection

```text
mongodb+srv://...
```

## Local Docker MongoDB

```text
mongodb://localhost:27017
```

---

# Healthcheck

Перевірка API:

```http
GET /health
```

Expected response:

```json
{
  "status": "ok"
}
```

---

# Скріни тестів

## Docker Compose Running

```text
[ PLACE SCREENSHOT HERE ]
```

---

## MongoDB Compass

```text
[ PLACE SCREENSHOT HERE ]
```

---

## GET /movies

```text
[ PLACE SCREENSHOT HERE ]
```

---

## POST /movies

```text
[ PLACE SCREENSHOT HERE ]
```

---

## Docker Containers

```text
[ PLACE SCREENSHOT HERE ]
```

---

## Tests Passed

```text
[ PLACE SCREENSHOT HERE ]
```

---

## Coverage

```text
[ PLACE SCREENSHOT HERE ]
```

---

# Production Features

* Multi-stage Docker build
* Persistent Docker volumes
* MongoDB Atlas integration
* Local Docker MongoDB
* Healthchecks
* Validation middleware
* Error handling middleware
* REST API architecture

---

# Автор

Movie Catalog API — навчальний production-grade backend проєкт на Node.js + TypeScript.
