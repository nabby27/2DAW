Vamos a realizar la validación de un formulario de tres maneras diferentes, el formulario esta en el documento html adjunto:

1. Manera "clasica" sin jquery: Sin utilizar la API de HTML5 ni jquery, valida estos elementos del formulario:

    1. Campo de texto no este vacío

    2. Edad no esté vacío, sea mayor de 0 y menor de 100, y sea un número

    3. Correo electrónico con formato correcto

    4. Fecha no este vacío y sea un número

    5. Se debe elegir una opción del select, y esta no puede ser la primera

    6. Se debe seleccionar el checked

    7. Se debe seleccionar un radio button

2. Al pulsar en enviar, se realizarán las comprobaciones. Si hay algun fallo, se avisa con un (o varios) alerts. Si todo es correcto, se saca por pantalla los datos elegidos y luego se envia el formulario ( dará error ya que no hay php)

3. Realiza las mismas comprobaciones con jquery

4. Realiza las mismas comprobaciones con jquery y el api de validacion con CSS3 y HTML5, para cada error saca un cuadro personalizado