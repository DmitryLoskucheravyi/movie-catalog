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

<img width="351" height="396" alt="image" src="https://github.com/user-attachments/assets/a5723e51-e59d-458a-9952-bf6a7a9acf70" />

---

## POST /movies

<img width="471" height="285" alt="image" src="https://github.com/user-attachments/assets/13e395bf-ac6e-4c86-8e51-f12f4023b03a" />

## GET /movies after posting

<img width="403" height="600" alt="image" src="https://github.com/user-attachments/assets/2e2ee7ca-654a-4992-8d46-b3d07543695d" />

---

## Docker Containers

<img width="1100" height="184" alt="image" src="https://github.com/user-attachments/assets/c35d52bc-ac18-492e-97bf-836237a16cbc" />


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
 src/routes       |   66.03 |       50 |      50 |   66.03 |                                        
  movie.ts        |   66.03 |       50 |      50 |   66.03 | 15-19,42,46,53,59,63,82-92,109-126,136 
 src/schemas      |     100 |      100 |     100 |     100 |                                        
  movie.schema.ts |     100 |      100 |     100 |     100 |                                        
------------------|---------|----------|---------|---------|----------------------------------------
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
