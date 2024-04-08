select @@global.max_allowed_packet;
set @@global.max_allowed_packet = 8388608;
select @@global.max_allowed_packet;
# SHOW VARIABLES LIKE 'max_allowed_packet';