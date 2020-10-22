

### POST /register

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id": "integer",
  "email": "string"
}
```

### POST /login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json

{
    "access_token": "jwt_string"
}
```

### POST /googleSignIn


Response:

- status: 201
- body:
  ​

```json

{
    "token": "jwtToken"
}
```

### POST /findAll

get list of task

Request:

- header : access_token (string)

Response:

- status: 200
- body:
  ​

```json

[
    {
        "id": 1,
        "title": "title 1",
        "category": "backlog",
        "userId": 1,
        "organization": "Hactiv8",
        "createdAt": "2020-10-22T20:29:57.031Z",
        "updatedAt": "2020-10-22T20:29:57.031Z"
    }
]
```

### POST /createTask

add new task

Request:

- body:
  ​

```json

{
    "title": "string"
}
```
- header : access_token (string)

Response:

- status: 200
- body:
  ​

```json

[
    {
        "id": 1,
        "title": "title 1",
        "category": "backlog",
        "userId": 1,
        "organization": "Hactiv8",
        "createdAt": "2020-10-22T20:29:57.031Z",
        "updatedAt": "2020-10-22T20:29:57.031Z"
    }
]
```

### PUT /task

update task by PUT

Request:

- body:
  ​

```json

{
    "title": "string",
    "category": "string"
}
```
- header : access_token (string)

Response:

- status: 200
- body:
  ​

```json

[
    {
        "id": 1,
        "title": "title 2",
        "category": "doing",
        "userId": 1,
        "organization": "Hactiv8",
        "createdAt": "2020-10-22T20:29:57.031Z",
        "updatedAt": "2020-10-22T20:29:57.031Z"
    }
]
```

### PATCH /task

update task by PATCH

Request:

- body:
  ​

```json

{
    "category": "string"
}
```
- header : access_token (string)

Response:

- status: 200
- body:
  ​

```json

[
    {
        "id": 1,
        "title": "title 2",
        "category": "done",
        "userId": 1,
        "organization": "Hactiv8",
        "createdAt": "2020-10-22T20:29:57.031Z",
        "updatedAt": "2020-10-22T20:29:57.031Z"
    }
]
```

### DELETE /task

delete task

Request:


- header : access_token (string)

Response:

- status: 200
- body:
  ​

```json

{
    "message" : "todo succes to delete"
}
```