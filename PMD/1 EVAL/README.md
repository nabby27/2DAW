# **Introducción**
El proyecto de la 1ª evaluación va a consistir en una primera aproximación a la implementación de una tienda virtual. Para ello, se combinarán las diferentes tecnologias trabajadas en cada módulo para construir la aplicación, de manera que el proyecto sea transversal a todos los módulos, aunque en cada uno sólo se evaluarán los aspectos relativos a los contenidos de dicho módulo.

# **Descripción de la aplicación**
La aplicación que se va a desarrollar esta evaluación consistirá en una tienda virtual simplificada, capaz de gestionar una serie de productos, clientes y pedidos. En esta primera parte de proyecto, se prestará especial atención al cuadro de administración de la tienda, es decir, la sección en la que el administrador puede dar de alta clientes, productos y pedidos. Básicamente, este cuadro de administración nos permitirá hacer un CRUD de las diferentes entidades de la base de datos.

También se hará una primera aproximación de la funcionalidad del carrito de la compra para clientes, por lo que se trabajará el proyecto desde dos experiencias de usuario: la del administrador de la tienda y la de un cliente.

Para personalizar el proyecto, cada alumno elegirá una temática diferente para la tienda. La temática será libre, siempre que encaje en el proyecto de tienda virtual (venta de productos, servicios, cursos...). Una vez elegida la temática (y validada por el profesor), el alumno tendrá que documentarse y buscar ejemplos de productos (fotografías, descripciones y precios) para poner en su base de datos. Se recomienda, por tanto, la elección de una temática con la que esté familiarizado. 

## **DIW**

### **Objetivos**
Los objetivos de esta práctica son los siguientes:

Aplicar de los conceptos trabajados en clase a un caso práctico
Construir la estructura de una web con varias secciones, utilizando las diferentes etiquetas HTML
Elaborar una hoja de estilo personalizada y adaptada a un proyecto determinado, utilizando el modelo de caja y los principios del diseño responsivo y adaptativo.
Estructurar proyectos de diseño web atendiendo a criterios de limpieza y reutilización de código.

### **Descripción de la práctica**
A continuación se detallan las diferentes tareas que serán necesarias para completar el proyecto, relacionadas con los contenidos de DIW. Cada alumno elegirá el layout y los colores más adecuados para su proyecto.

Sin embargo, sí hay una serie de directrices que será necesario cumplir y que se indicarán a continuación. Lee detenidamente los siguientes puntos y, en caso de duda, pregunta al profesor:

1. *Elección de tema:*
Lo primero es elegir el tema de tu tienda online. Haz una búsqueda por Internet de otras tiendas similares para coger ideas y, sobre todo, seleccionar los productos que "vas a vender". Antes de empezar, es imprescindible validar el tema con el profesor.

2. *Aspectos generales del diseño CSS:*
Se trabajara en dos documentos css, `admin-panel.css` y `tienda.css`, ambos ubicados en la carpeta `/css`. Los css han de estar elaborados completamente por el alumno y no se podrán utilizar hojas de estilos creados por terceros (frameworks). Las imágenes se guardarán en la carpeta `/img`. El css no ha de ser redundante (no repetir propiedades con los mismos valores en varios selectores), utilizar estilos en cascada como hemos hecho en clase. El css ha de incluir comentarios, indicando en cada selector o grupo de selectores su funcionalidad. Diseña variantes de botones (con efecto de presionado) y de cajas de mensajes (con iconos de fondo) para utilizarlos en las diferentes secciones del proyecto. Utiliza para esto estilos en cascada. Procura que los documentos css creados estén organizados de manera que todos los selectores relacionados se ubiquen consecutivamente. Puedes usar comentarios para separar grupos de selectores.

3. *Aspectos generales del diseño HTML:*
El HTML resultante ha de estar validado con el validador W3C.

4. *Página de login:*
Diseña una página de login para iniciar sesión. El formulario de login estará centrado en la página. Esta página dará acceso al cuadro de administración de la web, o mostrará un error.

5. *Cuadro de administración:*
Ha de indicar el nombre del usuario registrado en todas las secciones y proporcionar la opción de desconectar. Incluirá un menú que dará acceso a las diferentes secciones. El menú ha de indicar claramente la sección en la que se encuentra el usuario. El cuadro de administración se diseñará para ser accedido desde un ordenador, por lo que no será necesario adaptarlo para resoluciones inferiores. Sin embargo, sí que se ha de configurar para que, a partir de un tamaño determinado ya no siga redimensionando los contenidos (aparezcan scrolls).

6. *Sección gestión de clientes:*
Permitirá hacer CRUD de la tabla clientes. Las modificaciones y creaciones de nuevos registros se harán mediante un formulario que aparecerá en una ventana modal. Para el listado de los registros se utilizará un contenedor flex o grid css.

7. *Sección gestión de productos:*
Similar a la sección de clientes, pero incluyendo una miniatura de la imagen del producto en el listado (que se ajuste al tamaño de la celda sin deformarse). Al pulsar sobre la miniatura, se mostrará la imagen en grande en una ventana modal, con un botón para cerrar.

8. *Sección gestión de pedidos:*
Similar a la sección de clientes, pero incorporará la opción de listar las líneas de cada pedido. Ha de permitir hacer CRUD de pedidos y también de las líneas de un pedido. Desde esta sección se ha de poder, no solo editar pedidos existentes, sino también crear un pedido completo con sus líneas de pedido.

9. *Tienda virtual:*
Realiza una primera versión simplificada (minimalista) del diseño de la tienda virtual, a partir de los archivos php generados en el módulo de DWS. En la segunda parte del proyecto se ampliará esta parte. Utiliza flex y/o grid css para posicionar los elementos del diseño, con un planteamiento "mobile first", de manera que se pueda visualizar correctamente desde un dispositivo móvil. Usa media queries para adaptar la visualización. Durante el proceso de compra, y mientras no se entre en e carrito (`vercarrito.php`) o en el proceso de confirmación (`confirmar.php`), se verá de forma fija (no desaparece de la pantalla, independiente del scroll) el símbolo del carrito con el número de productos que hay en él.

10. *Acabado del proyecto web:*
El objetivo del proyecto es la creación de una aplicación web profesional, por lo que se tendrá en cuenta en la corrección el detalle y el cuidado en el acabado, la elección de una paleta de colores adecuada, un diseño de botones y mensajes coherente y consistente en todas las secciones de la web. Los estilos sí pueden ser diferentes entre la parte de cuadro de administración y la tienda.

### **Entrega**
Se entregará un enlace a GitHub en el que esté albergado el proyecto. 
La fecha máxima de entrega será el 18 de noviembre a las 15h

## **DWES**
En todo el proyecto será obligatorio respetar la estructura del MODELO VISTA CONTROLADOR. El diseño de las vistas será totalmente libre, teniendo en cuenta que nunca debe de haber HTML ni en el controlador ni en el modelo

### **Modelo**
Crearemos todo el modelo en un solo archivo llamado `modelo.php`, en el se incluirán todas las definiciones de clase que sean necesarias, tanto para nuestros controladores, como para aquellos que se utilicen en el la parte del proyecto correspondiente al módulo *desarrollo web en entorno cliente*. El diseño de este modelo es libre, pero ha de cumplir los siguientes requisitos:
    * Las propiedades han de ser privadas
    * Si es necesario se crearan set y get para acceder a algunas de ellas, utilizando los métodos mágicos.
    * Debe de haber una clase carrito para poder manejar las operaciones típicas sobre el. El diseño de propiedades y métodos es libre.
    * Todos aquellos métodos que sean necesarios para relacionarse con la base de datos, recibirán la conexión como parámetro y si necesitan algún valor para un campo se obtendrán de las propiedades que antes se habrán cargado con ellos. Nunca estos datos se pasarán como parámetros.
    * Todos los métodos que accedan a más de un registro (del tipo getAll) serán estáticos. (pero solo estos).

### **Controladores**
Además de los controladores necesarios para atender las necesidades del proyecto para el módulo *desarrollo web en entorno cliente*, en nuestra parte serán obligatorios los siguientes controladores.

1. `validar.php`: (nota: Hay que añadir un campo en la tabla clientes de tipo true o false y que se llame *administrador* para poder completar esta parte)
Para poder entrar se necesita validar el usuario y para ello utilizaremos variables de sesión de manera que no se podrá acceder a ninguno de los ficheros php, si el usuario no está validado. Para validarse se introduce el dni y la contraseña, y se comprueba con el contenido de la tabla **clientes**. Si es correcto, se comprobará si es administrador (con el campo creado antes):
    * Si es administrador se saltará al CRUD del proyecto del resto de módulos (dwc y diw) (se puede usar header)
    * Si no es administrador, se crearán 3 variables de sesión, una con el nombre y otra con el dni y otra llamada total con el valor de 0 (que se utilizará para saber en todo momento cuantos productos se han comprado) y se saltará a principal.php. (se puede usar header).

El nombre se mostrará en todas las páginas php del trabajo y el dni se utilizará para poder agilizar las tareas de recuperar sus datos para dar de alta el pedido.

2. `principal.php`: Una vez validado se le redirigirá a la página principal. En ella se mostrarán, todos los productos con la imagen de cada producto y bajo de la foto su nombre , su precio y un vínculo para mostrar  “detalle.php”. En la parte superior de la pantalla se pondrá un vinculo con un dibujo de un carrito y al pulsarlo se verá el estado actual del carrito (vercarrito.php) y debajo de este se mostrará el valor de la session total.

3. `Detalle.php`: Se mostrarán todos los datos del producto incluida la foto. Además tendra un cuadro de texto con la cantidad a comprar (inicialmente valdrá 1) y el botón comprar. Realmente será un formulario que al enviarse (pulsar botón comprar) llamará a vercarrito.php, pasándole como parámetros el id del producto, el nombre, el precio y la cantidad.

4. `Vercarrito.php`: A este archivo se puede llegar desde dos sitios, desde el icono del carrito de la página principal, o desde detalle.php (al comprar un producto, se sabrá porque se habrá pulsado el botón de comprar).
	* Si se llega desde la página principal, simplemente se muestra el contenido del carrito, listando los productos, su cantidad, su precio y calculando su importe. Al final se sumará el total de importes y también se mostrará.
	* Si se llega después de comprar, se añadirá el producto al carrito, se incrementará la sessión total, y se mostrará el carrito.
Añadir un producto lo haremos utilizando variables de sesión. Tendremos un array de sesiones para, las Id de productos, otro para los nombres, otra para los precios, y otra para la cantidades. La posición en el array lo marcará la sesión total. 
Siempre que se muestra el carrito la cantidad aparece como un cuadro de texto y añadimos un botón llamado actualizar. De esta manera si modificamos alguna cantidad con el botón actualizar se modifica la sesión correspondiente. Ojo  un solo botón actualizar para todo el carrito.
No se mostrarán las lineas del carrito cuya cantidad sea igual a 0, y está será la forma de borrar un producto del carrito. Al final del carrito se mostrará el botón de confirmar pedido (confirmar.php) y el botón de seguir comprando (este último enviará a la página principal).

5. `Confirmar.php`: En esta página, recogemos todos los datos del carrito almacenados en sesiones, así como el dni del cliente almacenado en la variable de sesión y con esto damos de alta la tabla pedidos y en la tabla lineaspedidos.
	* Alta en pedidos
	    * idpedido: Calcularemos el máximo de los valores que tiene en la tabla y le sumaremos uno.
	    * fecha: La de hoy.
	    * Dnicliente : El dni de la variable de sesión
	    * El resto de campos vacios
    * Alta en lineaspedidos: Idpedido es el que hemos calculado antes, nlinea es un contador desde 1 hasta el número de productos a añadir para ese pedido. El resto de campos los sacamos del carrito. En esta tabla tendremos que dar de alta tantos registros como productos haya en el carrito.

**NOTA: No se añadirán al pedido las lineas cuya cantidad sea igual a 0**. Se creará un string que contendrá las sentencias en html necesarias para visualizar el pedido completo, y al final se mostrará por pantalla. Se borrarán todas la variables de sesión.

#### **INVESTIGACIÓN** 
En este proyecto, se modificará la base de datos para que la gestión de las contraseñas sea utilizando la función para calcular su HASH, recomendada por php.net. De manera que no se almacena la contraseña, solo su HASH, y a la hora de validar se comprueba el HASH de la contraseña introducida con el almacenado en la base de datos.

## **DWEC**

### **Requisitos del proyecto**
* Todo el javascript debe ir en un fichero .js a parte, no se puede añadir nada relativo a la parte del proyecto de DWEC en el HTML
* Se puede (debe) utilizar jquery para facilitar el desarrollo y comprensión del código
* Las funcionalidades a implementar, harán llamadas AJAX a controladores PHP, los cuales realizarán las tareas necesarias en la base de datos. Cada tarea/función ha de ser implementada en un controlador.php diferente
* El intercambio de datos AJAX entre el cliente y el servidor se realizará con el formato de datos JSON, lo que facilita que se trabaje con objetos en todo momento
Se debe optimizar la transferencia de datos, por lo que es necesario minimizar tanto los datos que se envían al servidor como los que responde
* Se debe implementar las funcionalidades necesarias para que en el cliente se detecten posibles errores generados por la base de datos, por ejemplo, si se intenta insertar un pedido con id duplicado, el cliente ha de saber que ha habido un error
* Se debe de minimizar los elementos que se recargan, de manera que si hay que eliminar una fila, mejor borrar el elemento, que volver a cargarlos todos
* Es conveniente reducir el numero de identificadores en los elementos de HTML, se intentará aprovechar los identificadores de estilo para identificar los elementos en el javascript
* En el caso que no se desarrolle la parte del PHP, el alumno puede programar controladores que respondan JSON fijos, definidos estáticamente en el PHP, para comprobar la funcionalidad de la aplicación
* Se valorará el código bien formado, con tabulaciones que faciliten la comprensión, el uso de nombres de variable significativos, comentarios expicativos y el evitar código redundante.

### **Funcionalidades**
Tomando como base el ejemplo del módulo de DIW, en la pagina de gestión de usuarios tenemos que:

*Gestión de usuarios*
* Presentar en pantalla todos los usuarios
* Crear usuario nuevo, enseñando el cuadro necesario
* Borrar y editar un usuario en concreto, al editar enseñar el cuadro modal
* Al cancelar operación, ocultar cuadro modal

*Gestión de pedidos*
* Crear pedido nuevo, enseñando el cuadro necesario
* Borrar y editar un pedido en concreto, al editar enseñar el cuadro modal
* Enseñar las líneas de pedido
* Borrar lineas de pedido
* Añadir lineas de pedido
* Al cancelar operación, ocultar cuadro modal

*Gestión de productos*
* Presentar en pantalla todos los productos
* Crear producto nuevo, enseñando el cuadro necesario y guardando la imagen
* Borrar y editar un producto en concreto, al editar enseñar el cuadro modal
* Al cancelar operación, ocultar cuadro modal

### **Evaluación**
Para evaluar, el alumno realizará:

* La entrega del proyecto final en Aules 
* En su ordenador prueba de las funcionalidades completas.
* Explicación al profesor de como ha realizado la aplicación. El profesor realizará preguntas y solicitará modificaciones sobre el código del alumno.

Se calificará la funcionalidad de las tres páginas mediante una rúbrica en Aules

* 30% Usuarios
* 30% Productos
* 30% Pedidos

El 10% restante valorará la rapidez y eficiencia al realizar la práctica.

* +10% Si se presenta antes del miercoles 13/11
* +5% Si se presenta el jueves 14/11

El último día de entrega será el domingo 17 a las 23:59. En ese caso se evaluará el lunes 18 o martes 19