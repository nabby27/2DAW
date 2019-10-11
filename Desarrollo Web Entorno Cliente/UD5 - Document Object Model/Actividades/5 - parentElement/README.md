Vamos a crear una aplicación web que mostrará en pantalla una factura, en la cual podemos añadir o quitar productos. Tendrá tres inputs para introducir nombre cantidad y precio. Al clicar añadir, se crea una nueva fila y se recalcula la suma total y la suma con IVA
![](./img/Captura1.png)
Para cada fila, tendremos la opción de borrar la fila ( despues de confirmar ) y de ver detalles del producto en un alert
![](./img/Captura.png)
Al final hay un botón que imprimirá la página

Tienes que realizar la estructura HTML y el javascript en un fichero a parte. Tambien puedes utilizar css para darle estilo. 

CONSEJO: Para la estructura de la factura utiliza una tabla, puedes poner cabecera de la tabla con `<thead>`, el cuerpo es `<tbody>` y el pie `<tfoot>`