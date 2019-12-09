<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
    <form action="#" method="POST">
        Id Pedido: <input type="number" name="idPedido"><br>
        Fecha: <input type="date" name="fecha"><br>
        Cliente: <?php echo getSelect($clientes, 'cliente', 'id', 'nombre'); ?><br>
        <input type="submit" name="enviar" value="Enviar">
        <?php echo $error; ?>
    </form>

</body>
</html>