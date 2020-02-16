# T-Shop
Este es un proyecto multidisciplinar para las asignaturas de DWEC DWES y DIW donde se implementa un tienda y su cuadro de administración en base a unos requisitos marcados por los profesores [REQUIREMENTS.md](REQUIREMENTS.md).

---
### Requisitos
* internet
* node
* npm
* php
* apache 
* mysql 

> tambien se puede usar algun programa como XAMPP o similares para suplir `apache/mysql/php`

---
### Estructura de carpetas
La estructura de carpetas esta dividad dependiendo de la parte del proyecto. Para el cuadro de administración realizado en angular esta la carpeta `backoffice_angular`
y para la parte de tienda realizada e php esta en la carpeta `shop_php`.
Por otro lado en la carpeta `doc` encontramos documetnacion y ficheros de soporte como los wireframes o un dump de la base de datos.

#### shop_php
En esta carpeta encontramos todo lo necesario para la parte de tienda creada en php. En la carpeta `assets` encontramos los recursos de la web como imagenes, videos...
En `controllers` se encuentra la logica de la aplicación, son el punto de entrada. Por otro lado la carpeta `lib` son librerias externas que utiliza la web como son `dompdf` para generar un pdf de la factura y `bootstrap` para el diseño. En `services` tenemos los servicios API REST de la aplicación que servirán para la parte del panel de administración. La carpeta `style-guide` contiene un documetno de la guía de estilo. Por último en `views` tenemos las vistas de la aplicación.

#### backoffice_angular
En esta carpeta encontramos una estructura angular común en la que nuestra lógica se encuentra dentro de `src`.

---
### Probar el proyecto
Para poder probar el proyecto en local es necesario cumplir los requisitos anteriormente mencionados. Lo primero seria copiar la base de datos que hay dentro de la carpeta `doc/database`. Luego es necesario que dentro de la carpeta publica del servidor local (en apache linux es `/var/www/html/`, en xampp es la carpeta `/htdocs` que hay dentro de xampp) este solamente el contenido de la carpeta `shop_php` (**OJO** solo el contenido de la carpeta, no la carpeta). No nos tenemos que preocupar de poner la parte de angular porque para angular se levanta un servidor node en el puerto 4200 y por tanto da igual donde se encuentre esta carpeta. Por tanto simula 100% que pueda estar en servidores diferentes cada parte. Una vez colocado el contenido de la carpeta `shop_php` y con la base de datos creada podemos acceder a la parte de la tienda con la url [http://localhost/](http://localhost/).

Para la parte de la administración tenemos que colocar la carpeta `backoffice_angular` en cualquier parte menos en la carpeta publica de nuestro servidor local. Entramos dentro de la carpeta mediante una consola y ejecutamos el comando:
```shell
npm i
```
Esto nos instalará las dependencias necesarias para el proyecto angular. Una vez isntaladas las dependencias podemos ejecutar el servidor node con el comando:
```shell
npm run start
```
y podremos ver la pantalla de administración en la url [http://localhost:4200](http://localhost:4200).

Los usuarios para probar la aplicación los siguientes:

| Nombre | DNI | Password | Admin |
|---|---|---|---|
| Pepe | 11111111A | ivan | No
| Julia | 22222222A | ivan | No
| José | 88888888A | ivan | Sí
| Iván | 99999999A | ivan | Sí

> Los usuarios admin son los que pueden entrar a la parte de administración y los que no son admin son los que pueden comprar en la tienda