![](./img/timetable.png)

Vamos a retomar el ejercicio del horario en HTML que hicistéis en la primera unidad y vamos a mejorar su aspecto gráfico.

El horario modificado, ha de incluir los requisitos del anterior ejercicio (sin las ampliaciones) y los siguientes aspectos:

El horario ha de tener las siguientes características:
* Toda información de CSS irá en un documento externo (hay que quitar los styles del HTML)
* SÓLO se definirán clases para cada uno de los módulos o asignaturas, el resto de selectores tendrán que utilizar las etiquetas o atributos.
* A los tramos horarios libres se les dará estilo con la pseudoclase :empty
* Los bordes de la tabla serán invisibles
* Se definirá una fuente de tipo sans de manera genérica para todo el documento. El tamaño de los textos se ha de definir como relativo. Todos los textos irán centrados respecto su contenedor.
* Sustituye el icono por una imagen de fondo de la celda, que se alineará a la esquina inferior derecha.
* Por defecto sólo se verá la abreviatura del módulo asignatura, cuando se pase el ratón sobre ella, aparecerá el resto de la información.
* Los enlaces visitados y no visitados tendrán el mismo estilo (sobreescribir el comportamiento por defecto del navegador)
* El resultado ha de ser consistente en Chrome, Firefox y Explorer

### **Entrega**
Un archivo comprimido con los documentos html y css generados. Hay que pasar los validadores HTML y CSS antes de envíar, para detectar y corregir posibles errores.

### **Criterios de evaluación (APTO )**
El documento entregado cumple todos los puntos antes citados

### **Ampliación**
Haz también lo siguiente (cada ítem recupera +0.1 de un NO APTO):

* Incluye una par de fuentes descargadas de Internet (una para títulos y otra para el resto del texto) y modifica el CSS para que haga uso de esas fuentes.
* Utiliza la propiedad experimental mask junto con una imagen de un gradiente de blanco a negro para hacer que la imagen de fondo se difumine a medida que se acerca al borde
* Pon de fondo de las celdas diferentes tramas transparentes para las asignaturas (se ha de mantener el color de fondo y la imagen de fondo anterior)