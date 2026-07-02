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



** Stage - 3 **

##Query Analysis

The query is correct becase it gets all unread notifications for a student

The query becomes slow because the database contains many students and notifications

##Solution

- create an index on studentID,isRead and createdAt
- use pagination to load notifications is small batches
- Avoid Creating index on evry column because it uses more storage and slow insert and update operations

##SQL Query

SELECT * FROM notifications WHERE studentID=123 AD isRead = false ORDER BY createdAt ASC;

##Placement Notification in last 7 days

SELECT * FROM notifications WHERE notificationType ='Placement' NAD createdAt >=NOW()-INTERVAL 7 DAY;

#stage 4

**To Improve performance:
- use pagination to load only  few notifications at a time
- store frequently used data in cache
- load noifications only when need 
- use indexes for faser search

**Advantges
- Faster page loading 
- Reduce database load
- Better user experience
- Faster notification retriveal

##Trade-off

-cache needs regular updates
- pagination requires loading more data when user scrolls


**Stage 5**

#problem

- sending notification one by one is slow
- if emil sending fails ,some students will not recieve noifications
- the whole process may stop if 

