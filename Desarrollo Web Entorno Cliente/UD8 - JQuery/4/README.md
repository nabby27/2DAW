Crea una aplicación web para seleccionar un municipio.
![](img/Captura.PNG)

El primer select se cargan todas las provincias mediante una llamada AJAX a cargaProvinciasJSON.php, el cual devuelve las provincias. Una vez se haya seleccionado la provincia:

* Cambia la cabecera con el nombre de la provincia y su codigo postal

* Se carga un segundo select con los municipios de esa provincia, mediante una llamada AJAX a cargaMunicipiosJSON.php

Cuando se selecciona el municipio, en el texto final aparece la provincia y municipio seleccionado

* Analizar los PHP para deducir el formato de los datos a enviar al servidor y como los devuelve.

* Implementar code.js con jquery para que la aplicación funcione