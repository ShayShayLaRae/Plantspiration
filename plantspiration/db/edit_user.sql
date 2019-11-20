UPDATE users
SET username = ${username}
WHERE user_id = ${user_id};

UPDATE users
SET password = ${password}
WHERE user_id = ${user_id};

UPDATE users
SET img = ${img}
WHERE user_id = ${user_id};

UPDATE users
SET img = ${img}
WHERE user_id = ${user_id};

UPDATE users
SET email = ${email}
WHERE user_id = ${user_id};

SELECT * FROM users
WHERE user_id = ${user_id};