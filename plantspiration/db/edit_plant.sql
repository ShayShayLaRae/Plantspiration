UPDATE plants
SET common_name = ${common_name}
WHERE plant_id = ${plant_id};

UPDATE plants
SET scientific_name = ${common_name}
WHERE plant_id = ${plant_id};

UPDATE plants
SET hardiness_zone = ${hardiness_zone}
WHERE plant_id = ${plant_id};

UPDATE plants
SET propagation_type = ${propagation_type}
WHERE plant_id = ${plant_id};

UPDATE plants
SET soil_type = ${soil_type}
WHERE plant_id = ${plant_id};

UPDATE plants
SET sun = ${sun}
WHERE plant_id = ${plant_id};

UPDATE plants
SET acquired = ${acquired}
WHERE plant_id = ${plant_id};

UPDATE plants
SET current_list = ${current_list}
WHERE plant_id = ${plant_id};

SELECT * FROM plants;