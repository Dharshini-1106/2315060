# Notification System Design

**stage 1 **

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


** stage - 2 **

##Databse

I suggest using MySQL becaseit is easy to use and realiable and store the dat in structured format

** Database Schema **

Notification Table

column   Data Type
ID         INT
title      VARCHAR(100)
message    TEXT
status     VARCHAR(20)

## Problems when data increases
  - more notification takes more storage
  -searching becomes slower
  - database performance may reduce

  ##solution

  - create index for faster for faser search
  - Delete old notifications
  - use pagination to load notifications in small batches

  ## sql squries

  ** Create notification**
  INSERT INTO notifications(title,message,status)VALUES('Exam','Exam starts at 10 AM','Unread');

  ##Get Notifications 

  SELECT * FROM notifications;

  ##Marks as read

  UPDATE notifications set status='Read' where id=1;

  ##Delete Notification

  DELETE FROM notifications WHERE id=1;
