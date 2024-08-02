# API Documentation

## Base url

```
https://muneer-netflix-clone-xj0x.onrender.com/
```

## Authentication

### Signup

- Endpoint

```
POST /api/v1/auth/signup
```

- Body

```json
{
  "username": "your_username",
  "email": "your_email@gmail.com",
  "password": "your_passowrd"
}
```

### Login

- Endpoint

```
POST /api/v1/auth/login
```

- Body

```json
{
  "email": "your_email@gmail.com",
  "password": "your_passowrd"
}
```

### Logout

- Endpoint

```
POST /api/v1/auth/logout
```

### Authentication check

- Endpoint

```
Get /api/v1/auth//authCheck
```

## Movies

**❗❗These are protected routes only accessible after authentication and cookie setting**

### Trending Movie

- Endpoint

```
GET /api/v1/movie/trending
```

### Trailers of a movie by id

- Endpoint

```
GET /api/v1/movie/trailers/:id
```

### Details of a movie by id

- Endpoint

```
GET /api/v1/movie/details/:id
```

### Similar movies by id

- Endpoint

```
GET /api/v1/movie/similar/:id
```

### Movie categories

- Endpoint

```
GET /api/v1/movie/category
```

## TV shows

**❗❗These are protected routes only accessible after authentication and cookie setting**

### Trending TV shows

- Endpoint

```
GET /api/v1/tv/trending
```

### Trailers of a tv show by id

- Endpoint

```
GET /api/v1/tv/trailers/:id
```

### Details of a tv show by id

- Endpoint

```
GET /api/v1/tv/details/:id
```

### Similar tv shows by id

- Endpoint

```
GET /api/v1/tv/similar/:id
```

### TV show categories

- Endpoint

```
GET /api/v1/tv/category
```

## Searching

**❗❗These are protected routes only accessible after authentication and cookie setting**

### Person

- Endpoint

```
GET /api/v1/search/person/:search_query
```

### Movie

- Endpoint

```
GET /api/v1/search/movie/:search_query
```

### TV show

- Endpoint

```
GET /api/v1/search/tv/:search_query
```

### Search history

- Endpoint

```
GET api/v1/search/history
```

### Delete item from search history

- Endpoint

```
GET /api/v1/search/history/:id
```
