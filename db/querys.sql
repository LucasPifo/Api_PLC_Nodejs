CREATE DATABASE IF NOT EXISTS plc;

USE plc;

CREATE TABLE devices (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    no_device VARCHAR(45) NOT NULL
);

CREATE TABLE products (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    createdDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    no_device VARCHAR(45) NOT NULL 
);

CREATE TABLE dataLogs (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    createdDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    no_device VARCHAR(45) NOT NULL,
    event VARCHAR(255)
);

-- Insertar plc de prueba para consultar api
INSERT INTO devices (name, no_device) VALUES ('Plc de prueba', 'plcs71200_1');