DROP DATABASE IF EXISTS VIRTUALMARKET_PMD;
CREATE DATABASE VIRTUALMARKET_PMD CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci';
USE VIRTUALMARKET_PMD;

CREATE TABLE clientes(
    dniCliente VARCHAR(9) PRIMARY KEY,
    nombre VARCHAR(50) NULL,
    direccion VARCHAR (50),
    email VARCHAR(75) NOT NULL,
    pwd VARCHAR(255) NOT NULL,
    administrador BOOLEAN NOT NULL DEFAULT false
)engine innodb;

insert into clientes values ('11111111A', 'antonio', 'C/ valeras 22', 'antonio@midominio.es', '111111', false);

CREATE TABLE productos(
    idProducto INTEGER(6) AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    foto VARCHAR (255),
    marca VARCHAR (50),
    cantidad INTEGER(50),
    precio FLOAT
)engine innodb;

CREATE TABLE pedidos(
    idPedido INTEGER(4) NOT NULL PRIMARY KEY,
    fecha DATE NOT NULL,
    dirEntrega VARCHAR(50) NOT NULL,
    nTarjeta VARCHAR(50),
    fechaCaducidad DATE,
    matriculaRepartidor VARCHAR (8),
    dniCliente VARCHAR(9) REFERENCES clientes(dniCliente)
)engine innodb;

CREATE TABLE lineas_pedidos(
    nLinea INTEGER(2) NOT NULL,
    cantidad INTEGER(3) NOT NULL,
    idPedido INTEGER(4) NOT NULL REFERENCES pedidos(idPedido),
    idProducto INTEGER(6) REFERENCES productos(idProducto),
    PRIMARY KEY (idPedido, nLinea)
)engine innodb;
