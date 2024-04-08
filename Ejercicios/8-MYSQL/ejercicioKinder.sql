DROP DATABASE IF EXISTS kinder;
CREATE DATABASE IF NOT EXISTS kinder;
USE kinder;

CREATE TABLE IF NOT EXISTS products(
	id_product INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    codigo_barras INTEGER,
    nombre VARCHAR(55),
    precio DOUBLE NOT NULL,
    marca VARCHAR(55) DEFAULT 'kinder'
);

DESCRIBE kinder.products;
SELECT * FROM products;
SELECT * FROM kinder.products;

INSERT INTO products VALUES 
	(NULL, 1234, 'KINDER BUENO', 2.55, 'KINDER'),
    (3434, 'Montseny', 0.45, NULL);
SELECT * FROM products;
SELECT * FROM kinder.products;