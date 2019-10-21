## EJERCICIO REPASO DE PHP. FORMULARIOS, FUNCIONES …

Este ejercicio constará de 3 archivos PHP.

* **opciones.php**. Este archivo podría ser solo html ya que solo muestra un formulario con 4 cuadros de texto, que se enviará por post, para ser tratado por el siguiente archivo (formulario.php).

* **formulario.php**. Su función es la de construir un formulario para subir un archivo al servidor. Para ello contará con las siguientes funciones.
    * **limpiar**. Esta función recibe como parámetro un texto y lo devuelve quitándole los espacios de la izquierda y de la derecha y lo protege para la inyección de código utilizando la función htmlspecialchars. `Ej: $texto = limpiar($campo)`:
    * **lista**. Esta función construye una lista desplegable en html (select). Para ello recibe un 2 parámetros:
        * nombre: El nombre a usar por el select.
        * opciones: Array donde cada posición es un elemento del select (el nombre y el valor del option)

        Esta función recorrerá el array opciones y devolverá un string con el html necesario para mostrar la lista desplegable. `Ej: $str = lista('directorio', $lista_opciones)`:
    
    Este archivo cogerá los valores entregados por opciones.php y los 'limpiara' utilizando la función limpiar. Después de esto construirá un array con ellos y los pasará a la función lista. A esta función como parámetro nombre le pasaremos 'directorio'.
    Se  mostrará un formulario con un campo file para seleccionar un archivo y la lista desplegable construida antes. Y por supuesto un botón para enviar este formulario y ser tratado en subir.php

* **subir.php**. Este archivo será el encargado de subir la foto al servidor. Tendrá las siguientes funciones.
    * **crear_directorio**. Esta función recibirá como parámetro el nombre de un directorio, comprobará si existe y sino lo creará. Ej: crear_directorio($directorio)
    * **estado_archivo**: Esta función recibirá el 
        * nombre de un archivo (incluida su extensión) 
        * directorio donde se grabará.

        Devolverá false si el archivo no es jpg, gif o png, y en caso contrario devolverá el nombre del archivo completo. Para construir el nombre del archivo se comprueba si existe en la carpeta y si es así se le añade un identificador único entre el nombre y la extensión. Además se la añadirá el directorio y la / que los separa.

        `Ej: $resultado = estado_archivo($nombre, $directorio)`.

La misión de este programa es subir el archivo al directorio seleccionado en la lista desplegable del formulario. Se comprobará primero si ha subido al servidor y después si es del tipo correcto, lanzando los correspondientes mensajes de error.
Al final se mostrará un vinculo para volver a empezar (opciones.php).