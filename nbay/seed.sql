DROP DATABASE IF EXISTS nbay;

CREATE DATABASE nbay;

USE nbay;

-- Departments are not yet supported
-- 2 hour homeworks are a little bit hard


CREATE TABLE products (
    item_id INT(8) NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(45) NULL,
    item_department VARCHAR(45) NULL,
    price DECIMAL(10, 2) NULL,
    item_stock INT(8) NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (item_name, item_department, price, item_stock)
VALUES("Salad two", "health", 5.99, 91), 
("Salad one", "health", 4.49, 1), 
("Salad tree", "health", 9.49, 12), 
("Salad four", "health", 2.99, 3), 
("Salad five", "health", 38.99, 25)