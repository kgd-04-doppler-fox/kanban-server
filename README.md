# Kanban

## Table of Contents

* [About the Project](#about-the-project)
* [Task](#task)
  * Show All task
  * Show a task by Id
  * Add a new task
  * Edit a task by Id
  * Delete a task by Id
* [User](#user)
  * Register
  * Login
  * Login with Google account
  

## About the Project

Kanban application to manage your tasks better!

Build with express.js and Vue.js

* Register an account for your personalised Kanban
* Add a new task, update, or delete it
* See other's task in the same organization

---

## Task

API documentation for the Task

### **Show All Task**

  Returns a json data of all Task of an authenticated user.

* **URL**

  /tasks

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

*  **Headers**

   **Required:**
 
    access_token


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    {
      "task": [
          {
            "id": 11,
            "title": "learn heroku",
            "description": "heroku",
            "category": "doing",
            "UserId": 9,
            "createdAt": "2020-09-29T14:36:54.921Z",
            "updatedAt": "2020-09-29T14:36:54.921Z"
          },
          {
            "id": 12,
            "title": "learn Jest",
            "description": "Jest",
            "category": "doing",
            "UserId": 9,
            "createdAt": "2020-09-29T14:50:27.073Z",
            "updatedAt": "2020-09-29T14:50:27.073Z"
          }
        ]
    }
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

---

### **Show a task by Id**

  Returns a single json data about a task selected by `req.params.id`.

* **URL**

  /tasks/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

*  **Headers**

   **Required:**
 
    access_token


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    {
      "task": {
        "id": 1,
        "title": "learn Jest",
        "description": "Jest",
        "category": "done",
        "UserId": 9,
        "createdAt": "2020-09-29T14:50:27.073Z",
        "updatedAt": "2020-09-29T14:50:27.073Z"
      }
    }
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ "task": "task not found." }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />

---

### **Add a new task**

  Create a new task.

* **URL**

  /tasks

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

*  **Headers**

   **Required:**
 
    access_token


* **Data Params**

  `title=[string]` </br>
  `description=[string]` </br>
  `category=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**  <br />
    `{
        "task": {
        "id": 1,
        "title": "learn Jest",
        "description": "Jest",
        "category": "todo",
        "UserId": 9,
        "updatedAt": "2020-09-29T14:50:27.073Z",
        "createdAt": "2020-09-29T14:50:27.073Z"
      }
    }`
    
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

---

### **Edit a task by Id**

  Edit each data of a task selected by `req.params.id`.

* **URL**

  /tasks/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
    `id=[integer]`

*  **Headers**

   **Required:**
 
    access_token


* **Data Params**

    `title=[string]` <br />
    `description=[string]` <br />
    `category=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    `{
      "id": 1,
      "title": "learn heroku",
      "description": "heroku",
      "category": "done",
      "UserId": 9,
      "createdAt": "2020-09-29T14:50:27.073Z",
      "updatedAt": "2020-09-29T14:59:37.144Z"
    }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ "msg": "task not found!" }`

  OR 

  * **Code:** 500 INTERNAL SERVER ERROR <br />

---

### **Delete a task by Id**

  Delete a task selected by `req.params.id`.

* **URL**

  /tasks/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
    `id=[integer]`

*  **Headers**

   **Required:**
 
    access_token

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "msg": "task has been deleted." }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

---


## User

API documentation for the User.

### **Register**

  Register a new account for the application.

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
    None

* **Data Params**

    `email=[string]` </br>
    `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    `{
      "id": 2,
      "email": "hello@gmail.com"
    }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "msg": "Email must be type of email." }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "msg": "Email cannot be empty" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "msg": "Email has been taken." }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "msg": "Password cannot be empty" }`

  OR 

  * **Code:** 500 INTERNAL SERVER ERROR <br />

---

### **Login**

  Login to a registered user.

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
    None

*  **Headers**

   **Required:**
 
    access_token

* **Data Params**

    `email=[string]` </br>
    `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    `{
        "access_token": "dummyaccesstoken"
    }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "msg": "Wrong email or password." }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />


### **Login with Google account**

  Login with Google account. If email isn't registered yet, the server will `register` the email as a new user. Both process will generate `access_token`.

* **URL**

  /googleSignIn

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
    None

*  **Headers**

   **Required:**
 
    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    `{
        "access_token": "dummyaccesstoken"
    }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />