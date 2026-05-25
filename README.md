# Movie Catalog API

Production-grade REST API для каталогу фільмів з JWT authentication, Docker infrastructure та MongoDB Atlas integration.

---

# Production URL

https://movie-catalog-api.fly.dev/

---

# Технології

## Backend

* Node.js
* TypeScript
* Express
* MongoDB
* Mongoose
* Zod

## Authentication

* JWT Authentication
* Refresh Tokens
* bcrypt Password Hashing
* Protected Routes
* Owner Authorization

## Testing

* Jest
* Supertest
* mongodb-memory-server

## DevOps

* Docker
* Docker Compose
* MongoDB Atlas
* MongoDB Compass
* Fly.io

---

# Можливості API

## Movies CRUD

* Create movie
* Get all movies
* Get movie by ID
* Update movie
* Delete movie

## Authentication & Authorization

* Register
* Login
* Logout
* Current authenticated user
* JWT access tokens
* Refresh token cookies
* Protected routes
* Owner authorization

## Додаткові можливості

* Filtering
* Pagination
* Sorting
* Validation через Zod
* Global error handling
* Dockerized infrastructure
* Persistent MongoDB storage
* Healthcheck
* Integration testing

---

# Структура проєкту

```text
/src
  /config
    database.ts

  /middleware
    errorHandler.ts
    requireAuth.ts
    validate.ts

  /models
    movie.model.ts
    user.model.ts

  /routes
    auth.ts
    movie.ts

  /schemas
    auth.schema.ts
    movie.schema.ts

  app.ts
  server.ts

/tests
  setup.ts
  movie.test.ts
  model.test.ts

Dockerfile
compose.yaml
package.json
tsconfig.json
```

---

# Встановлення проєкту

## Clone repository

```bash
git clone YOUR_REPOSITORY_URL
```

## Перейти у папку проєкту

```bash
cd movie-catalog-api
```

## Встановлення залежностей

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

JWT_ACCESS_SECRET=your_access_secret

JWT_REFRESH_SECRET=your_refresh_secret
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

# Authentication

## Register

### POST

```http
/auth/register
```

---

## Login

### POST

```http
/auth/login
```

---

## Logout

### POST

```http
/auth/logout
```

---

## Current User

### GET

```http
/auth/me
```

---

# Movies

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

Protected route (JWT required)

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

Protected route (JWT required)

### PATCH

```http
/movies/:id
```

---

## Delete movie

Protected route with owner authorization

### DELETE

```http
/movies/:id
```

---

# Pagination

```http
/movies?page=1&limit=10
```

---

# Filtering

```http
/movies?genre=Sci-Fi
```

---

# Sorting

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

<img width="1178" height="438" alt="image" src="https://github.com/user-attachments/assets/dd14ad5c-291c-4588-9ebf-89353a081b0b" />

---

## MongoDB Compass

<img width="1371" height="533" alt="image" src="https://github.com/user-attachments/assets/e3fcac23-f8f9-4cc1-9efc-78c70ccc72f4" />

---

## GET /movies

<img width="351" height="396" alt="image" src="https://github.com/user-attachments/assets/a5723e51-e59d-458a-9952-bf6a7a9acf70" />

---

## POST /movies

<img width="471" height="285" alt="image" src="https://github.com/user-attachments/assets/13e395bf-ac6e-4c86-8e51-f12f4023b03a" />

---

## GET /movies after posting

<img width="403" height="600" alt="image" src="https://github.com/user-attachments/assets/2e2ee7ca-654a-4992-8d46-b3d07543695d" />

---

## Docker Containers

<img width="1100" height="184" alt="image" src="https://github.com/user-attachments/assets/c35d52bc-ac18-492e-97bf-836237a16cbc" />

---

# Authentication Screenshots

## Register Request

[SCREENSHOTTTT]

---

## Login Request

[SCREENSHOT]

---

## Authenticated /auth/me

[SCREENSHOT]

---

## Protected POST /movies

[SCREENSHOT]

---

## Forbidden DELETE Request

[SCREENSHOT]

---

# Fly.io Deployment

## Movies endpoint

<img width="552" height="789" alt="image" src="https://github.com/user-attachments/assets/4ecae0f2-c8fc-47bd-a046-f5c09e78dadb" />

---

## Health endpoint

<img width="619" height="150" alt="image" src="https://github.com/user-attachments/assets/f2c4d570-fd39-4606-bb3f-bd55d1ec2c6e" />

---

## Production POST request

<img width="465" height="338" alt="image" src="https://github.com/user-attachments/assets/978f6e94-3347-4180-a805-8032610db728" />

---

## Tests Passed

```text
 PASS  tests/model.test.ts
 PASS  tests/movie.test.ts
------------------|---------|----------|---------|---------|----------------------------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------|---------|----------|---------|---------|----------------------------------------
All files         |   74.41 |       50 |   54.54 |   74.11 |
 src              |      90 |      100 |       0 |      90 |
  app.ts          |      90 |      100 |       0 |      90 | 12
 src/middleware   |      80 |       50 |   66.66 |   78.57 |
  errorHandler.ts |      50 |      100 |       0 |   33.33 | 9-11
  validate.ts     |    90.9 |       50 |     100 |    90.9 | 21
 src/models       |     100 |      100 |     100 |     100 |
  movie.model.ts  |     100 |      100 |     100 |     100 |
 src/routes       |   66.03 |       50 |      50 |   66.03 | 15-19,42,46,53,59,63,82-92,109-126,136
 src/schemas      |     100 |      100 |     100 |     100 |
  movie.schema.ts |     100 |      100 |     100 |     100 |
------------------|---------|----------|---------|---------|----------------------------------------

Test Suites: 2 passed, 2 total
Tests:       8 passed, 8 total
```

---

# Production Features

* JWT Authentication
* Refresh Tokens
* Owner Authorization
* Protected Routes
* Multi-stage Docker build
* Persistent Docker volumes
* MongoDB Atlas integration
* Local Docker MongoDB
* Validation middleware
* Error handling middleware
* REST API architecture
* Integration testing

---

# Автор

Movie Catalog API — навчальний production-grade backend проєкт на Node.js + TypeScript 🚀