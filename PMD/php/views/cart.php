<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/tienda.css">
    <title>Tienda</title>
</head>
<body>
    <header class="header">
        <span class="header__company-name">NBA T-shop</span>
        <div class="header__user-info">
            <a class="button button--logout" href="validar.php">Cerrar sesi&oacute;n</a>
            <div class="header__user-wellcome">Bienvenido <?php echo $_SESSION['user_name']?>!
                <div>
                    <a href="vercarrito.php"><img class="icon" src="./img/cart.svg"></a>
                    <span class="header__user-cart--number"><?php echo $_SESSION['total']?></span>
                </div>
            </div>
        </div>
    </header>
    <div class="arrow-back__container">
        <a href="principal.php"><img class="icon" src="./img/left-arrow.svg"></a>
    </div>

    <form action="" method="post">
        <div class="button-update__container">
            <button class="button button--update" type="submit" name="update">Actualizar</button>
        </div>

        <article class="line-order">
            <div class="line-order__item">Product</div>
            <div class="line-order__item">Cantidad</div>
            <div class="line-order__item">Precio unitario</div>
            <div class="line-order__item">Importe</div>
        </article>

        <?php $totalImport = 0; ?>
        <?php for ($index = 0; $index < $_SESSION['total']; $index++) : ?>
            <?php $totalImport += $_SESSION['price'][$index] * $_SESSION['quantity'][$index]; ?>
            <?php if (intval($_SESSION['quantity'][$index]) > 0) : ?>
                <article class="line-order">
                    <input type="hidden" name="index[]" value="<?php echo $index ?>">
                    <div class="line-order__item"><?php echo $_SESSION['product_name'][$index] ?></div>
                    <input class="line-order__item line-order__input quantity__input" type="number" min="0" name="quantity[]" value="<?php echo $_SESSION['quantity'][$index] ?>">
                    <div class="line-order__item"><?php echo $_SESSION['price'][$index] ?> &euro;</div>
                    <div class="line-order__item"><?php echo $_SESSION['price'][$index] * $_SESSION['quantity'][$index] ?> &euro;</div>
                </article>
            <?php endif ?>
        <?php endfor ?>
        
        <div class="total-import__container">
            <strong>Total: <?php echo $totalImport; ?> &euro;</strong>
        </div>

        <div class="buttons-end__container">
            <a href="principal.php" class="button button--go-to">Seguir comprando</a>
            <a href="confirmar.php" class="button button--confirm">Confirmar</a>
        </div>
    </form>
</body>
</html>