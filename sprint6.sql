CREATE SCHEMA sprint6 ;


CREATE USER 'usergod'@'localhost' IDENTIFIED BY '11111111';
GRANT ALL PRIVILEGES ON sprint6 .* TO 'usergod'@'localhost';


use sprint6;
select * from usuario;
