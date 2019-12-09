INSERT INTO plants (img_url, common_name, scientific_name, propagation_type, hardiness_zone, soil_type, sun, acquired, current_list, user_id)
VALUES (${img_url}, ${common_name}, ${scientific_name}, ${propagation_type}, ${hardiness_zone}, ${soil_type}, ${sun}, ${acquired}, ${current_list}, ${user_id});

-- SELECT * FROM plants
-- WHERE plant_id = $1;