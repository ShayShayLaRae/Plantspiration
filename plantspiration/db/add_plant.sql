INSERT INTO plants (img, common_name, scientific_name, propagation_type, soil_type, sun, acquired, current_list)
VALUES (${img}, ${common_name}, ${scientific_name}, ${propagation_type}, ${soil_type}, ${sun}, ${acquired}, ${current_list});

SELECT * FROM plants
WHERE plant_id = $1;