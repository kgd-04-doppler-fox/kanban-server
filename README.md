# kanban-server

**Add Task**
----
  Returns json data about a single task.

* **URL**

  /tasks

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  `{
    "title": "Belajar RESTfull API",
    "description": "di hacktiv8
  }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
                    "task": {
                        "id": 5,
                        "title": "Make login user and admin",
                        "description": "waiting assigment",
                        "UserId": 1,
                        "organization": "Hacktiv8",
                        "updatedAt": "2020-10-07T15:35:10.624Z",
                        "createdAt": "2020-10-07T15:35:10.624Z",
                        "category": "Backlog"
                    }
                }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "internal server error" }`


  **Show All Task**
----
  Returns all user data task.

* **URL**

  /tasks/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`
   `token=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "tasks": [
        {
            "id": 13,
            "title": "Finishing  Porto Kanban",
            "title": "Make login user and admin",
            "description": "waiting assigment",
            "UserId": 1,
            "organization": "Hacktiv8",
            "createdAt": "2020-10-08T18:07:14.589Z",
            "updatedAt": "2020-10-08T20:06:24.040Z",
            "User": {
                "id": 1,
                "email": "andri@mail.com",
                "password": "$2a$10$weAioUMV1vOeYUUMUMffcuXhiVpj8rBPL/GcOzd86RyzffJCriOny",
                "organization": "Hacktiv8",
                "createdAt": "2020-10-06T13:48:55.334Z",
                "updatedAt": "2020-10-06T13:48:55.334Z"
        },
        {........}
            ] 
                }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg : "not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ msg : "invalid access." }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "internal server error" }`


    **Show Task**
----
  Returns single user data task.

* **URL**

  /tasks/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`
   `token=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
                    "task": {
                        "id": 5,
                        "title": "Make login user and admin",
                        "description": "waiting assigment",
                        "UserId": 1,
                        "organization": "Hacktiv8",
                        "updatedAt": "2020-10-07T15:35:10.624Z",
                        "createdAt": "2020-10-07T15:35:10.624Z",
                        "category": "Backlog"
                    }
                }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg : "not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ msg : "invalid access." }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "internal server error" }`
 

    **Update Task (PUT)**
----
  Returns single user data task.

* **URL**

  /tasks/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`
   `token=[string]`

* **Data Params**

    `{
      "title": "Belajar restfull api",
      "description": "learn"
    }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
                    "task": {
                        "id": 5,
                        "title": "Make login user and admin",
                        "description": "waiting assigment",
                        "UserId": 1,
                        "organization": "Hacktiv8",
                        "updatedAt": "2020-10-07T15:35:10.624Z",
                        "createdAt": "2020-10-07T15:35:10.624Z",
                        "category": "Backlog"
                    }
                }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg : "not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ msg : "invalid access." }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "internal server error" }`

  OR

  * **Code:** 400 INVALID DATE <br />
    **Content:** `{ msg : "invalid date" }`


    **Update Task (PATCH)**
----
  Returns single user data task.

* **URL**

  /tasks/:id

* **Method:**

  `PATCH`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`
   `token=[string]`

* **Data Params**

    `{
      "category": "Backlog"
    }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
                    "task": {
                        "id": 5,
                        "title": "Make login user and admin",
                        "description": "waiting assigment",
                        "UserId": 1,
                        "organization": "Hacktiv8",
                        "updatedAt": "2020-10-07T15:35:10.624Z",
                        "createdAt": "2020-10-07T15:35:10.624Z",
                        "category": "Todo"
                    }
                }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg : "not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ msg : "invalid access." }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "internal server error" }`


  **DELETE Task**
----
  Returns json message  .

* **URL**

  /tasks/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`
   `token=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"message": "success to deleted"}`
 
* **Error Response:**

   * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg : "not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ msg : "invalid access." }`
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "internal server error" }`

* **Sample Call:**

  **Register User**
----
  Returns json data about a single user.

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

    `{
        "email": "ayurahma@mail.com",
        "password": "12345"
    }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
    "user": {
        "id": 5,
        "email": "ayurahma@mail.com",
        "updatedAt": "2020-10-07T15:47:07.226Z",
        "createdAt": "2020-10-07T15:47:07.226Z",
        "organization": "Hacktiv8"
    }
}`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "internal server error" }`

OR

  * **Code:** 400 INVALID DATE <br />
    **Content:** `{ msg : "invalid date" }`


  **Login User**
----
  Returns json token .

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**
    
    None

* **Data Params**
    `{
        "email": "ayurahma@mail.com",
        "password": "12345"
    }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaG1hQG1haWwuY29tIiiOjEsImlhdCI6MTYwMTY1NTU5MX0.gfJ9Iey2JmLDtoz2i7sEHueW5sywRZ7AX9DDiCz-dg`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "internal server error" }`

OR

  * **Code:** 400  INVALID PASSWORD / EMAIL <br />
    **Content:** `{ msg : "Wrong email / password" }`