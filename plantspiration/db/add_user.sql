INSERT INTO users (username, password, img, email)
VALUES (${username}, ${password}, ${img}, ${email});

SELECT * FROM users
WHERE user_id = $1;