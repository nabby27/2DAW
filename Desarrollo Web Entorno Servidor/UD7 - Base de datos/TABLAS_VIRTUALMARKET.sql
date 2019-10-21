
CREATE DATABASE IF NOT EXISTS VIRTUALMARKET
CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci';
USE VIRTUALMARKET;


drop table IF EXISTS clientes;
create table clientes(
dniCliente varchar(9) primary key,
nombre varchar(50) null,
direccion varchar (50),
email varchar(75) not null,
pwd varchar(10) not null
)engine innodb;

insert into clientes values ('11111111','antonio','C/ valeras 22','antonio@midominio.es','111111');
insert into clientes values ('22222222','maria','C/ Moreras 12','maria@midominio.es','222222');
insert into clientes values ('33333333','jaime','Avda CapitÃ¡n 102','jaime@midominio.es','333333');
insert into clientes values ('44444444','marta','C/ Valeras 4','marta@midominio.es','444444');
insert into clientes values ('55555555','juan','Plaza Miguel de Unamuno','juan@midominio.es','555555');
insert into clientes values ('66666666','manuel','C/Atocha 14','manuel@midominio.es','666666');
insert into clientes values ('12345678','isabel','C/ Virgen del Puerto 3','isabel@midominio.es','777777');



drop table IF EXISTS productos;
create table productos(
idProducto int(6) auto_increment primary key,
nombre varchar(100) not null,
origen varchar(50),
foto varchar (50),
marca varchar (50),
categoria enum ('frio','congelado','seco'),
peso          INTEGER(3) NOT NULL ,
unidades      int(5) NOT NULL,
volumen   INTEGER(4),
precio  INTEGER(4)
)engine innodb;

INSERT INTO productos VALUES (null,'Macarrones','italia', 'macarrones.jpg', 'gallo','seco',250,100,10,1);
INSERT INTO productos VALUES (null,'Tallarines','italia', 'tallarines.jpg', 'gallo','seco',250,100,10,1);
INSERT INTO productos VALUES (null,'Atun','españa','atun.jpg', 'calvo','seco',250,100,10,1);
INSERT INTO productos VALUES (null,'Sardinillas','españa','sardinas.jpg', 'dia','seco',250,100,10,1);
INSERT INTO productos VALUES (null,'Mejillones','españa','mejillones.jpg', 'calvo','seco',125,100,10,1);
INSERT INTO productos VALUES (null,'Fideos','italia','fideos.jpg', 'gallo','seco',250,100,10,1);
INSERT INTO productos VALUES (null,'Galletas Cuadradas','francia','galletas.jpg', 'gullon','seco',800,100,10,1);
INSERT INTO productos VALUES (null,'Barquillos','españa','barquillos.jpg', 'cuetara','seco',150,100,10,1);
INSERT INTO productos VALUES (null,'Leche entera','españa','leche.jpg', 'pascual','frio',1000,100,10,1);

drop table IF EXISTS pedidos;
create table pedidos(
idPedido int(4) not null primary key,
fecha date not null,
dirEntrega varchar(50) not null,
nTarjeta varchar(50),
fechaCaducidad date,
matriculaRepartidor varchar (8),
dniCliente varchar(9) references clientes(dniCliente)
)engine innodb;

insert into pedidos values (1,'2016/01/20','C/ Valeras, 22','111111','2020/02/02','pbf-1144','11111111');
insert into pedidos values (2,'2016/02/10','C/ Princesa, 15','333333','2020/02/02','bbc-2589','33333333');

drop table IF EXISTS lineaspedidos;
create table lineaspedidos(
idPedido int(4) not null references pedidos(idPedido),
nlinea int(2) not null,
idProducto int(6) references productos (idProducto),
cantidad int(3) not null,
primary key (idPedido,nlinea)
)engine innodb;


insert into lineaspedidos values (1,1,3,10);
insert into lineaspedidos values (1,2,4,10);
insert into lineaspedidos values (1,3,9,10);
insert into lineaspedidos values (2,1,5,10);
insert into lineaspedidos values (2,2,7,10);



