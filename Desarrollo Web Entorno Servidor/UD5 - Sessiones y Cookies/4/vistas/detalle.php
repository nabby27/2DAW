<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>

    <form action="" method="POST">
        <table>
            <tr>
                <td>Pedido</td>
                <td>Nlinea</td>
                <td>Producto</td>
                <td>Cantidad</td>
            </tr>
            <?php for ($linea = 1; $linea <= $dato['numeroLineas']; $linea++) : ?>
                <tr>
                    <td><?php echo $_COOKIE['idPedido'] ?></td>
                    <td><?php echo $linea ?></td>
                    <td><?php echo $dato['producto'][$linea] ?></td>
                    <td><?php echo $dato['cantidad'][$linea] ?></td>
                </tr>
            <?php endfor ?>
            <tr>
                <td><?php echo $_COOKIE['idPedido'] ?></td>
                <td><?php echo $dato['numeroLineas'] + 1 ?></td>
                <td><?php echo getSelect($productos, 'producto', 'id', 'nombre'); ?></td>
                <td><input type="number" name="cantidad"></td>
                <td><input type="submit" name="continuar" value="continuar"></td>
            </tr>
        </table>
    </form>

    <a href="terminar.php">Terminar</a>
</body>

</html>