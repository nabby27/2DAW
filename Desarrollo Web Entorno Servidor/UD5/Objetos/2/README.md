## EJERCICIO DE POO

## MODELO
Será un archivo llamado modelo.php, que contendrá la definición de todas las clases.

#### CLASES
Además de los métodos indicados en cada clase todas tendrán el método mágico __get() para poder leer las propiedades privadas.

##### PRODUCTOS:
* Atributos: Peso, Precio, Stock (todas protected).
* Metódos:
    * **Constructor**: Utilizaremos un constructor mágico que reciba como parámetro los tres atributos.
    * **Asignar**: Crear un array asociativo donde la clave del array es el nombre del atributo y el valor, su valor.

##### MONITORES:
Hereda de productos pero además tiene los siguientes atributos y métodos.
* Atributos: Pulgadas (que será privada).
* Métodos:
    * **Constructor**: Será un constructor mágico que recibe todos los atributos, tanto del producto como del monitor como parámetro. Llamará al constructor padre para asignar los valores de productos y asignará el valor del atributo pulgadas.
    * **Asignar**: Igual que el anterior llamará al asignar padre y además añadirá una posición más al array asociativo; la del atributo pulgadas.

##### DISO DURO:
Hereda de productos pero además tiene los siguientes atributos y métodos.
* Atributos: capacidad (que será privada).
* Métodos:
    * **Constructor**: Será un constructor mágico que recibe todos los atributos, tanto del producto como del discoduro como parámetro. Llamará al constructor padre para asignar los valores de productos y asignará el valor del atributo capacidad.
    * **Asignar**: Igual que el anterior llamará al asignar padre y además añadirá una posición más al array asociativo; la del atributo capacidad.

## VISTAS
Serán los siguientes archivos php todos incluidos en una carpeta llamada vistas.
**Formulario.php**: Archivo que muestra en pantalla el formulario.
**mostrar.php**: Archivo que recorre un objeto que se ha definido en el controlador mostrando todos sus atributos (se puede hacer con un foreach, investígalo)

## CONTROLADOR
Será un único fichero php llamado index.php, que mostrará un formulario con todos los atributos  de todas las clases y una lista desplegable para elegir si es monitor o disco duro.

En función del tipo de producto elegido, se crea un objeto de ese tipo y utilizando sus métodos, se asignan los valores introducidos a su array asociativo. Finalmente se mostrará por pantalla el contendido de este objeto utilizando la vista diseñada para esto.

El controlador, como ya sabemos, no tiene nada de html se emplean las vistas definidas para eso.