3.1 - Crearemos un documento en php que mostrará un formulario para rellenar nombre, apellidos y domicilio. Ese formulario se mostrará la primera vez que pongamos en marcha el archivo y al pulsar el botón enviar ya no aparecerá el formulario, sino un mensaje diciendo `procesando datos`.

3.2 - Ampliaremos el ejercicio anterior de manera que con los datos introducidos en el formulario rellenaremos un array associativo, pero lo haremos para que ese código sirva para cualquier otro formulario, ya que recorreremos el array del sistema `GET` para saber que campos tiene el formulario.

3.3 - Cuando enviamos el formulario comprobamos que no estén vacíos, en cuyo caso se lanza algún mensaje génerico de error `hay algún campo vacío` y vuelve a aparecer el formulario (comprobar con que función el cmapo no esta vacío). 

3.4 - Evitar la inyección de código.