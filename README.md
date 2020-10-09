# kanban-server
## API DOCUMENTATION ##
http://localhost:3000/

**Title**
----
    USER LOGIN

* **URL**

    /login

* **Method:**
  
    `POST`

* **Success Response:**
    {
        access_token: "Your Access_token"
    }
 
* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `undhandle`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />


**Title**
----
    USER Register

* **URL**

    /register

* **Method:**
  
    `POST`

* **Success Response:**
    {
        "id": User id,
        "name": "User Name",
        "email": "User Email"
    }
 
* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `unhandle`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />



**Title**
----
    USER GOOGLE LOGIN

* **URL**

    /googleSignIn

* **Method:**
  
    `POST`

* **Success Response:**
    {
        access_token: "User Access_token"
    }
 
* **Error Response:**
**Code:** 500 INTERNAL SERVER ERROR <br />



**Title**
----
    GET ALL TASKS

* **URL**

    /tasks

* **Method:**
  
    `GET`

* **Success Response:**
    [
        {
            "id": 7,
            "title": "Painting Process",
            "category": "to-do",
            "UserId": 1,
            "createdAt": "2020-10-06T15:56:49.398Z",
            "updatedAt": "2020-10-06T15:57:10.458Z"
        }
    ]
 
* **Error Response:**

    **Code:** 500 INTERNAL SERVER ERROR <br />



**Title**
----
    GET TASKS BY ID

* **URL**

    /tasks/:id

* **Method:**
  
    `GET`

* **Success Response:**
    {
        "task": {
            "id": 25,
            "title": "Jogging with Mr Boltz",
            "category": "backlog",
            "UserId": 3
        }
    }
 
* **Error Response:**

**Code:** 500 INTERNAL SERVER ERROR <br />


**Title**
----
    CHANGE STATUS BY ID

* **URL**

    /tasks/:id

* **Method:**
  
    `PATCH`

* **Success Response:**
   {
        "id": 25,
        "title": "Jogging with Mr Boltz",
        "category": "backlog",
        "UserId": 3,
        "createdAt": "2020-10-09T14:24:01.133Z",
        "updatedAt": "2020-10-09T16:15:29.375Z"
    }
 
* **Error Response:**

**Code:** 500 INTERNAL SERVER ERROR <br />


**Title**
----
    DELETE TASK BY ID

* **URL**

    /tasks/:id

* **Method:**
  
    `DELETE`

* **Success Response:**
    {
        "msg": "success delete"
    }
 
* **Error Response:**

**Code:** 500 INTERNAL SERVER ERROR <br />
