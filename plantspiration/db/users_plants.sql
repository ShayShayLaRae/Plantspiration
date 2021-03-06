SELECT
  plants.user_id,
  plant_id,
  img_url,
  common_name,
  scientific_name,
  propagation_type,
  hardiness_zone,
  soil_type,
  sun,
  acquired,
  current_list
FROM
  plants
INNER JOIN users ON users.user_id = plants.user_id
WHERE plants.user_id = $1;