# Notification System Design

1.Get Notifications

GET/api/notifications
**Headers**
Authorization:Bearer <token>
Content-type:application/json

**Response**
json
[
    {
        "id":1,
        "title":"Welcome",
        "message":"Welcome to the app",
        "status":"unread"
    }
]

2.Create Notification

POST /api/notifications

**Headers**
Authorization:Bearer<token>
Content-Type:application/json

**Request**

json
{
    "title":"Exam",
    "message":"Exam starts at 10 AM"
}

**Response**

json{
    "message":"Notification created successfully"
}

3.Mark Notification as Read

PUT /api/notifications/{id}

**Headers**

Authorization:Bearer<token>
Content-Type:application/json

**Response**

json
{
    "message":"Notification marked as read"
}

4.Delete Notification

Delete /api/notifications/{id}

**Headers**

Authorization:Bearer<token>
Content-Type:application/json

**Response**

json{
    "message":"Notification deleted successfully"
}

#Notification JSON Schema

json{
    "id":1,
    "title":"Exam",
    "message":"Exam starts at 10 AM",
    "status":"Unread"
}

