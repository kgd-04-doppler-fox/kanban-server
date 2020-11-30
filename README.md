# kanban-server

# portofolio kanban
baseurl : http://localhost:3000/

**Create Task**
----
    Create Task

* **URL**

    /tasks

* **Method:**

    `POST`

* **Success Response:**
    {
        "task": {
            "id": 8,
            "title": "Cobaaaaaaaa",
            "category": "Doing",
            "UserId": 1,
            "updatedAt": "2020-10-09T11:58:25.503Z",
            "createdAt": "2020-10-09T11:58:25.503Z"
        }
    }

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Date is invalid"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />


**Edit Task**
----
    Edit Task

* **URL**

    /tasks/:id

* **Method:**

    `PUT`

* **Success Response:**
    {
        "id": 2,
        "title": "Coba Terussss",
        "category": "on-going",
        "UserId": 1,
        "createdAt": "2020-10-08T07:16:45.600Z",
        "updatedAt": "2020-10-23T01:03:09.633Z"
    }

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "invalid"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />



**Show All Task**
----
    Show All Task

* **URL**

    /tasks

* **Method:**

    `GET`

* **Success Response:**
    [
        {
            "id": 3,
            "title": "Coba 2",
            "category": "on-going",
            "UserId": 1,
            "createdAt": "2020-10-09T07:26:01.625Z",
            "updatedAt": "2020-10-09T07:26:01.625Z"
        },
    ]

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "invalid"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />



**Find Task**
----
    Find Task

* **URL**

    /tasks/:id

* **Method:**

    `GET`

* **Success Response:**
    {
        "task": {
            "id": 2,
            "title": "Coba Terussss",
            "category": "",
            "UserId": 1,
            "createdAt": "2020-10-08T07:16:45.600Z",
            "updatedAt": "2020-10-23T01:05:55.163Z"
        }
    }

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Error 404 Data Not Found"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />



**Delete Task**
----
    Delete Task

* **URL**

    /tasks/:id

* **Method:**

    `DELETE`

* **Success Response:**
    {
        "message": "Task Successfully Deleted"
    }

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "ERROR 404 Not Found"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />


**Change Category Task**
----
    Change Category Task

* **URL**

    /tasks/:id

* **Method:**

    `PATCH`

* **Success Response:**
    {
        "message": "Task Successfully Updated"
    }

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Error 404 Data Not Found"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />



**Register User**
----
    Register User

* **URL**

    /register

* **Method:**

    `POST`

* **Success Response:**
    {
        "id": 14,
        "email": "eeeee@mail.com"
    }

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "email must be unique"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />


**Login User**
----
    Login User

* **URL**

    /login

* **Method:**

    `POST`

* **Success Response:**
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InR5YUBtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE2MDM0MTU3NTV9.3_Q15nRzIpD_nBSIqWQkOuRKIDur28NCDE99Cz1H0EY"
    }

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Wrong Email / Password"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />