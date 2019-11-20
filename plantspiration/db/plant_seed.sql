CREATE TABLE plants (
plant_id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id),
img_url TEXT,
common_name VARCHAR(40),
scientific_name VARCHAR(40),
propagation_type VARCHAR(20),
soil_type VARCHAR(30),
sun VARCHAR(30),
acquired VARCHAR(20),
current_list VARCHAR(30)
);