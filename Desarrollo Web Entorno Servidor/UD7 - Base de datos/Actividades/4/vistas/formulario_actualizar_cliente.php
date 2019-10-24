<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="#" method="post">
        <input type="hidden" name="dniCliente"  value="<?php echo $cliente->dniCliente ?>"><br>
        DNI: <input type="text" name="dniCliente" value="<?php echo $cliente->dniCliente ?>" disabled><br>
        Nombre: <input type="text" name="nombre"  value="<?php echo $cliente->nombre ?>"><br>
        Dirección: <input type="text" name="direccion"  value="<?php echo $cliente->direccion ?>"><br>
        Email: <input type="email" name="email"  value="<?php echo $cliente->email ?>"><br>
        Password: <input type="password" name="password"  value="<?php echo $cliente->password ?>"><br>
        <button type="submit" name="actualizar">Actualizar</button>
    </form>
</body>
</html>