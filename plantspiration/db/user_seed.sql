-- DROP TABLE IF EXISTS users;
-- CREATE TABLE users (
-- user_id SERIAL PRIMARY KEY,
-- username VARCHAR(30),
-- password VARCHAR(30),
-- img TEXT,
-- email VARCHAR(100)
-- );
DROP TABLE IF EXISTS user_hash;
DROP TABLE IF EXISTS posts;
CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	username VARCHAR(100),
	email VARCHAR,
	img TEXT
);
CREATE TABLE user_hash (
	hash_id SERIAL PRIMARY KEY,
	hash TEXT,
	user_id INT REFERENCES users(user_id)
);
CREATE TABLE posts (
	post_id SERIAL PRIMARY KEY,
	title VARCHAR(40),
	post_img TEXT,
	content TEXT,
	likes INT,
	user_id INT REFERENCES users(user_id)
);

INSERT INTO users (username, email, img)
VALUES 
('Shayla', 'shayla.paulsen@gmail.com', 'prof img');

INSERT INTO user_hash (hash, user_id)
VALUES ('password', 1),
('s3cret', 2);

INSERT INTO posts (title, post_img, content, likes, user_id)
VALUES ('Cute Dog', 'https://www.petguide.com/wp-content/uploads/2015/03/bernedoodle-11.jpg', 'Bernedoodles are cute', 0, 1),
('Hot Dogs', 'https://static01.nyt.com/images/2019/05/21/dining/kwr-mexican-hot-dogs/kwr-mexican-hot-dogs-articleLarge.jpg', 'Hot dogs from Mexico', 0, 2);