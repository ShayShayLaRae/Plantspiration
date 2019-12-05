INSERT INTO users (username, email, img)
VALUES (${username}, ${email}, ${img})
RETURNING user_id;