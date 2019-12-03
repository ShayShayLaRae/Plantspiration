-- INSERT INTO users (username, img, email)
-- VALUES (${username}, ${img}, ${email});

-- SELECT * FROM users
WHERE user_id = $1;
INSERT INTO users (username, email, img)
VALUES (${username}, ${email}, ${img})
RETURNING user_id;