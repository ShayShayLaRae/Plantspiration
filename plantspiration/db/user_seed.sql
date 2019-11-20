CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(30),
password VARCHAR(30),
img TEXT,
email VARCHAR(100)
);