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


