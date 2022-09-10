SELECT * FROM Users;

SELECT * FROM ToDoList;	


SELECT * FROM ToDoList
WHERE creatorUserId = 1;


SELECT t.id as taskId, t.title, t.description, t.limitDate, t.creatorUserId, t.status, u.nickname as creatorUserNickname
FROM ToDoList as t
INNER JOIN Users as u ON t.creatorUserId = u.id
WHERE creatorUserId = 1;
