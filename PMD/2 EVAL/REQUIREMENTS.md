# TIENDA

---
---
## DWES
---
Esta parte del proyecto, estará totalmente relacionada con las partes del resto de módulos impartidos en 2 de daw

#### CONSIDERACIONES PREVIAS
* En todo el proyecto será obligatorio respetar la estructura del **MODELO VISTA CONTROLADOR**.
* En el cliente, __se almacenará solo el HASH de la contraseña__.
* Todas las URL’s utilizadas serán con un formato amigable.
* Se implementarán dos páginas diferentes, una para administración y otra para la tienda. En la parte de administración solo podrán entrar los _'clientes'_ que sean administradores.
* En está ocasión el carrito se almacenará en una tabla nueva, dentro de la base de datos.

#### SERVICIOS
Todos los procesos necesarios para la parte de administración, que se realizarán en la asignatura de DWC, serán organizados en forma de servicios, hechos en PHP, para ser llamados desde angular.

#### MODELO
Crearemos todo el modelo en un solo archivo llamado **modelo.php**, en el se incluirán todas las definiciones de clase que sean necesarias, tanto para nuestros controladores, como para aquellos que se utilicen en el la parte del proyecto correspondiente al módulo _'desarrollo web en entorno cliente'_. 

En esta ocasión **almacenaremos el carrito en la base de datos** (crearéis la tabla con estructura libre) por lo tanto hay que tener esta tabla en cuenta para el modelo.

El diseño de este modelo es libre, pero ha de cumplir los siguientes requisitos:
* Las propiedades han de ser **privadas**
* Si es necesario se crearan **set** y **get** para acceder a algunas de ellas, utilizando los métodos mágicos.
* Todos aquellos métodos que sean necesarios para relacionarse con la base de datos, recibirán **la conexión como parámetro** y si necesitan algún valor para un campo **se obtendrán de las propiedades** que antes se habrán cargado con ellos. __Nunca estos datos se pasarán como parámetros__.
* Todos los métodos que accedan a más de un registro (del tipo __getAll__) serán **estáticos**.

#### CONTROLADORES
**En esta ocasión habrá dos urls diferentes para la parte de administración y para la parte de la tienda. __Nosotros solo nos ocupamos de la parte de la tienda. (el resto serán servicios)__**
Serán obligatorios los siguientes controladores:

1. **validar.php**: Solo será llamado este controlador cuando el usuario quiera, pulsando el botón validar que aparecerá en la pantalla principal. Si el usuario no se valida, se le pedirá obligatoriamente cuando quiera comprar, para obtener sus datos de envío. Si es correcto, se crearán 2 cookies, una con el **nombre** y otra con el **dni** y se saltará a __principal.php__. (se puede usar header). El nombre se mostrará en todas las páginas php del trabajo y el dni se utilizará para poder agilizar las tareas de recuperar sus datos para dar de alta el pedido.

3. **principal.php**: Una vez validado se le redirigirá a la página principal. En ella se mostrarán, todos los productos con la imagen de cada producto y bajo de la foto su nombre, su precio y un vínculo para mostrar  __detalle.php__. En la parte superior de la pantalla se pondrá un vinculo con un dibujo de un carrito y al pulsarlo se verá el estado actual del carrito (__vercarrito.php__). Debajo de este carrito aparecerá el total de registros que haya en la tabla **carrito**. En cualquier parte de la pantalla se pondrá un icono para validarse (ir a __validar.php__) o registrarse (se llamará al proceso de darse de alta que ya se tiene en la asignatura DWC).

3. **detalle.php**: Se mostrarán todos los datos del producto incluida la foto. Además tendrá un cuadro de texto con la cantidad a comprar (inicialmente valdrá 1) y
el botón comprar. Realmente será un formulario que al enviarse (pulsar botón comprar) llamará a vercarrito.php, pasándole como parámetros el id del producto, el nombre, el precio y la cantidad.

4. **vercarrito.php**: A este archivo se puede llegar desde dos sitios, desde el icono del carrito de la página principal, o desde detalle.php (al comprar un producto se sabrá porque se habrá pulsado el botón de comprar).

	A. Si se llega desde la página principal, simplemente se muestra el contenido del carrito, listando los productos, su cantidad, su precio y calculando su importe. Al final se sumará el total de importes y también se mostrará.
	
    B. Si se llega después de comprar, se añadirá el producto en la base de datos.

    Siempre que se muestra el carrito la cantidad aparece como un cuadro de texto y añadimos un botón llamado **actualizar**. De esta manera si modificamos alguna cantidad con el botón actualizar se modifica el registro de la tabla correspondiente. __Ojo  un solo botón actualizar para todo el carrito__. También se añadirá un botón **borrar**, en cada linea, para eliminar ese producto de la tabla carrito, en la base de datos. Al final del carrito se mostrará el botón de confirmar pedido (__confirmar.php__) y el botón de seguir comprando (este último enviará a la página principal).

5. **confirmar.php**: Lo primero es comprobar si el usuario está validado, si no es así se le obliga a validarse o registrarse, esto es necesario para poder obtener la dirección de envío. Una vez superado este paso se le informa de que la forma de pago es por transferencia y se le muestra los datos para hacer la transferencia. A continuación recogemos todos los datos del carrito almacenados en la base de datos, así como el dni del cliente almacenado en la coockie y con esto damos de alta el pedido en la tabla __pedidos__ y en la tabla __lineasPedidos__.
    
    * Alta en pedidos:
        - **idPedido**: Calcularemos el máximo de los valores que tiene en la tabla pedidos el campo idPedido y le sumaremos uno.
        - **fecha**: La del momento de hacer el pedido.
        - **dniCliente**: El dni de la variable de sesión.
        - **dirEntrega**: La dirección del clietne.
        - El resto de campos vacíos.
    
    * Alta en lineasPedidos:
        - **idPedido**: El id calculado anteriormente.
        - **nLinea**: Es un contador desde 1 hasta el número de productos a añadir para ese pedido.
        - El resto de campos los sacamos del carrito.
        - En esta tabla tendremos que dar de alta tantos registros como productos haya en el carrito.
        
    Se creará un string que contendrá las sentencias en html necesarias para visualizar el pedido completo, y al final se mostrará por pantalla. Se borrarán todas las cookies y todos los registros del carrito.

#### API
Es necesario utilizar alguna API de terceros, que tenga que ver con el proyecto, e integrarla en el código del proyecto.

#### INVESTIGACIÓN
El pedido que hemos generado antes en un string se convertirá a pdf

#### NOTA

* Cuando un usuario se valida se tienen que tener en cuenta si tiene un carrito ya creado par asignárselo.

* Se tiene que permitir que todo el mundo que acceda a la tienda pueda crear un carrito aunque no esté validado.

---
---
## DWEC
---
#### INTRODUCCIÓN
El proyecto de la 2ª evaluación va a consistir en implementar la administración de la tienda virutal con una aplicación web SPA con Ángular. Para ello, se combinarán las diferentes tecnologías trabajadas en cada módulo para construir la aplicación, de manera que el proyecto sea transversal a todos los módulos, aunque en cada uno sólo se evaluarán los aspectos relativos a los contenidos de dicho módulo.

#### DESCRIPCIÓN DE LA APLICACIÓN
La aplicación que se va a desarrollar es el cuadro de administración de la tienda, es decir, la sección en la que el administrador pueda insertar, borrar, editar... clientes, productos y pedidos.

Básicamente, este cuadro de administración nos permitirá hacer un CRUD de las diferentes entidades de la base de datos.

El objetivo será diseñar la aplicación desde cero, utilizando el framework Ángular.

#### REQUISITOS
* El proyecto se va a realizar con framework Ángular en su totalidad
* La SPA ha de tener, como estructura principal 4 componentes:
    * Login
    * Menú
    * Clientes
    * Productos
    * Pedidos
* Para la realizar las tareas se pueden crear mas componentes
* Se ha de crear las interfaces necesarias para la aplicación.
* Se han de crear los servicios, y métodos de estos servicios, necesarios para realizar las tareas.
* Se debe implementar las funcionalidades necesarias para que en el cliente se detecten posibles errores generados por la base de datos, por ejemplo, si se intenta insertar un pedido con id duplicado, el cliente ha de saber que ha habido un error
* En el caso que no se desarrolle la parte del PHP, el alumno puede programar controladores que respondan JSON fijos, definidos estáticamente en el PHP, para comprobar la funcionalidad de la aplicación
* Se valorará el código bien formado, con tabulaciones que faciliten la comprensión, el uso de nombres de variable significativos, comentarios expicativos y el evitar código redundante.

#### FUNCIONALIDADES
Tomando como base el ejemplo del módulo de DIW, en la pagina de gestión de usuarios tenemos que:

###### LOGIN
* Aparece el nombre de usuario que ha iniciado sesión.

###### Gestión de clientes
* Presentar en pantalla todos los usuarios.
* Crear usuario nuevo, enseñando el cuadro necesario (modal o no).
* Borrar y editar un usuario en concreto.

###### Gestión de productos
* Presentar en pantalla todos los productos.
* Crear producto nuevo, enseñando el cuadro necesario ~~y guardando la imagen~~.
* Borrar y editar un producto en concreto.

###### Gestión de pedidos
* Listar todos los pedidos.
* Crear pedido nuevo, enseñando el cuadro necesario.
* Borrar y editar un pedido en concreto.
* Enseñar las líneas de pedido.
* Borrar lineas de pedido.
* Añadir lineas de pedido.

#### RELACIÓN CON OTROS MÓDULOS
##### DWES
La comunicación se realizará mediante un servicio web que conectará con un API REST, el cual realizará las tareas necesarias hacia la base de datos

##### DIW
A la SPA se ha de dar estilo mediante el módulo de Bootstrap integrado en Angular

#### AMPLIACIÓN
Se valorará subir la aplicación web a Firebase y la base de datos y API en un hosting

#### EVALUACIÓN
Para evaluar, el alumno realizará:
* La entrega del proyecto final en Aules.
* En el proyector, presentación y prueba de las funcionalidades completas.
* Explicación al profesor de como ha realizado la aplicación. El profesor realizará preguntas y solicitará modificaciones sobre el código del alumno.

Se calificará la funcionalidad de las tres páginas mediante una rúbrica en Aules

* 5% Estructura general de la página y menú.
* 10% Login.
* 20% Usuarios.
* 20% Productos.
* 30% Pedidos.
* 5% Ampliaciones.

---
---
## DIW
---
#### INTRODUCCIÓN
El proyecto de la evaluación va a consistir en completar la tienda virtual realizada durante la primera evaluación para aplicar los nuevos conceptos trabajados en esta evaluación, de manera que los veáis aplicados en un contexto en el que entran en juego varias tecnologías del lado cliente y servidor. De nuevo, aunque se trabajarán los contenidos de los diferentes módulos de forma simultánea,  en cada módulo sólo se evaluarán las realizaciones asociadas a sus contenidos.

#### DESCRIPCIÓN DE LA APLICACIÓN
La aplicación que se va a desarrollar esta evaluación consistirá en optimizar la tienda virtual, para hacerla completamente funcional, y optimizar su cuadro de administración de productos, clientes y pedidos.

Para el proyecto, es imprescindible continuar con la temática de tienda de la primera evaluación, si bien, se podrán hacer modificaciones en el diseño de la tienda respecto a la que se presentó entonces.

#### OBJETIVOS
Los objetivos para esta parte de la práctica son los siguientes:

* Aplicar de los conceptos trabajados en clase a un caso práctico
* Utilizar un framework para diseñar una aplicación web
* Utilizar guías de estilo para definir los estilos de una aplicación web
* Utilizar esquemas para planificar el diseño y navegación de una aplicación web

#### DESCRIPCIÓN DE LA PRACTICA
Imagina que, en una fase del desarrollo del proyecto, tras probar el prototipo del producto (el proyecto de la 1ª Evaluación), se plantean nuevos requisitos o modificaciones a los existentes. Estas nuevos requisitos se definen a continuación.

Lee detenidamente los siguientes puntos y, en caso de duda, pregunta al profesor:

##### 1. Mejora del cuadro de administración
Se ha decidido que el cuadro de administración y toda su funcionalidad (login administrador y CRUD de todas las tablas) no es suficientemente robusto, y se ha optado por reimplementarlo usando el framework AngularJS y los estilos predefinidos de bootstrap.

##### 2. Diseño de la tienda
* Un estudio de mercado ha determinado que un porcentaje muy elevado de los usuarios de la tienda utilizarán un smartphone para acceder a ella, por lo que en el diseño se va a centrar en la visualización para dispositivos móviles.

* Será un diseño responsivo, de forma que sea compatible también con dispositivos de escritorio, reajustándose los contenidos a esa visualización.

* Como en el anterior diseño, el carrito con el número de productos estará siempre visible (menos en el proceso de checkout).

* Elaborar un wireframe comentado para smartphone (puedas hacerlo con cacoo, con LO Draw o con el programa que tu quieras). Se deben incluir flechas entre las pantallas para expresar la navegación.

* Para cada pantalla del wireframe anterior, incluir una pantalla adicional sobre como quedará en la versión desktop (no hace falta que incluyas flechas para conectar esas pantallas).

* Se puede hacer la tienda con bootstrap, aunque no es obligatorio.

##### 3. Guía de estilo
Para garantizar una correcto mantenimiento del código , se elaborará una guía de estilos en un documento HTML, indicando con ejemplos los diferentes estilos empleados en la tienda (colores de fondo, colores de texto, botones, tamaños de  encabezamientos y tipografía, imágenes, ...). Dicho documento será accesible desde una URL del servidor de la web. Puedes basarte en el formato generado por Stylify me (pero lo has de hacer tú)

##### 4. Factura
Diseña una página de factura en HTML que se podrá descargar una vez finalizado el proceso de compra (usar una libreria de generación de PDF desde el PHP).

##### 5. Añadir imagen corporativa
Se ha de diseñar un logotipo vectorial que se empleará en el encabezado de página, en la factura y en el favicon.

##### 6. Diseño de banners
Para el lanzamiento de la tienda, se diseñarán unos banners de promociones que se mostrarán en zonas de la página principal (indicar en el wireframe).
Habrá un juego de banners de baja resolución para la versión móvil y otro, con los mismos banners, pero con más resolución para la versión de escritorio.

##### 7. Incluir vídeos
Se ha decidido incorporar un banner grande con vídeo en la página de inicio sólo en la versión desktop. Será un vídeo relacionado con la temática de la web, editado para evitar contenidos no visuales como texto y que sea coherente con el diseño de la web. No tendrá controles, ni sonido. Incluir esto también en el wireframe.

##### 8. Incluir animación
Para dotar de un poco más de dinamismo a la página, añadir alguna animación que mejore la experiencia de usuario y anime a hacer la compra. 
Al menos, diseñar y  añadir una animación con @keyframes (por ejemplo: que el carrito haga alguna animación sutil cuando se le añada un objecto, que los objetos de la tienda en oferta se muevan para llamar la atención, hacer un spinner o similar que aparezca en algún momento de la interacción de compra...)

##### 9. Limpieza y estructura de código
Para mejorar las tareas de mantenimiento, será necesario que el código generado sea limpio, esté comentado y estructurado de forma coherente entre directorios.
Mucho cuidado con las mayúsculas

##### 10. Experiencia de usuario de la tienda
El objetivo del proyecto es la creación de una aplicación web profesional, por lo que se tendrá en cuenta en la corrección el detalle y el cuidado en el acabado, el seguimiento de principios de usabilidad generales y que el resultado proporcione una experiencia de usuario satisfactoria.
Los estilos pueden ser diferentes entre la parte de cuadro de administración y la tienda.

#### IMPORTANTE
En caso de no implementar la funcionalidad JS o PHP de alguna de las partes, se tendrá que desarrollar un mockup en HTML + CSS que simule como quedaría, para que se evalúe esa parte en DIW.

#### ENTREGA
Subir un documento con un enlace a GitHub en el que está albergado el proyecto e instrucciones sobre cámo acceder a las diferentes secciones, así como usuarios y passwords. Añadir al usuario cmillanb como colaborador del proyecto. 

**IMPORTANTE**: Incluid un archivo SQL con el volcado de la base de datos para su importación.

Incluir también un documento con los wireframes.

La entrega se hará el 14 de febrero. Los proyectos finalizados se presentarán en clase entre el día 14 y el 17 de febrero.