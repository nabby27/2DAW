## PRACTICA: Uso de PDO, TRANSACCIONES y CONSULTAS preparadas

El cometido de esta práctica es insertar un pedido de la base de datos virtualmarket, tanto los datos generales del pedido como sus lineas, en una sola transacción. Primero lo almacenamos todo en variables de sesión y finalmente lo almacenamos en la base de datos..

### CONTRALADORES

Tendremos tres controladores:

#### index.php

Se mostrará un formulario para rellenar los campos principales de la tabla pedidos (idPedido, Fecha, y dniCliente), el dniCliente se rellenará con una lista desplegable que obtendrá los valores de la tabla cliente. Se comprobará que todo es correcto, es decir que no existe un pedido con ese Id. Si es así se almacenan los tres campos en sendas variables de sesión. Se crea una variable de sesión llamada linea que almacenará el número de lineas introducidas y que inicialmente valdrá 0.
A continuación se salta al siguiente controlador (lineas.php).

#### lineas.php

Este controlador servirá para rellenar las lineas de pedidos. En pantalla aparecerán todos las lineas de este mismo pedido que ya se hayan introducido (las que están en las variables de sesión), y al final un formulario con las siguientes características:
* Se rellenará solo los campos de producto y cantidad
* Los productos se rellenarán con una lista desplegable que obtendrá los valores de la tabla productos
* En el botón del formulario debe de poner “continuar”

Después del formulario aparecerá un vínculo con el texto “terminar” para ir al tercer controlador (terminar.php).
Cuando se pulsa el botón “continuar” del formulario, se almacenan los datos introducidos en variables de sesión:
* En primer lugar se incrementará la variable de sesión linea 
* Usaremo un array de variables de sesión, para las nlineas, idProductos, y cantidad. Se utilizará la variable de sesión linea como índice. (además este valor será el mismo que el de nlinea para cada linea.)

Se tienen que seguir introduciendo lineas hasta que se pulse el vínculo terminar. Debemos de hacerlo optimizando los condicionales para evitar una recarga de página con header.

#### terminar.php

Este controlador es el encargado de terminar todo el proceso, es decir, insertar las variables de sesión en la base de datos y destruirlas. Mostrando al final un mensaje con todo lo que se ha introducido (este mensaje se va construyendo mediante una variable de tipo string durante el método adecuado).
Es importante recordar que todo el controlador debe de ser una única transacción.

### MODELO

Tendremos en cuenta que todo se realizará con PDO, con consultas preparadas y con tratamiento de excepciones. Tendremos tres clases
* Base: igual que hasta ahora pero con PDO
* Pedido: tendrá las siguientes características:
    * Recibirá como parámetro el link como hasta ahora en todos los métodos que lo necesitemos
    * Las consultas serán preparadas, pero no necesitan parámetros.
    * Tendremos un método llamado guardar que servirá para almacenar el objeto en las variables de sesión.
* Linea: Con las siguientes características:
    * Recibirá como parámetro el link como hasta ahora en todos los métodos que lo necesitemos
    * Tendremos un método guardar para guardar las propiedades de la clase en variables de sesión
    * Y el método más importante que es insertarTodas, que será estático. Leerá todas las lineas de las variables de sesión y las insertará en la base de datos. Usaremos parámetros (bindparam). De manera que solo se preparará una vez y se ejecutará tantas como lineas haya que insertar.