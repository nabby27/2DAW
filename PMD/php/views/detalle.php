<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./styles/tienda.css">
    <title>Tienda</title>
</head>
<body>
    <header class="header">
        <span class="company_name">NBA T-shop</span>
        <div class="account-info">
            <a class="button button--logout" href="validar.php?logout">Cerrar sesi&oacute;n</a>
            <div class="account-info__user">Bienvenido <?php echo $_SESSION['name']?>! <div><a href="vercarrito.php"><img class="cart" src="./img/cart.svg"></a><span class="cart__total"><?php echo $_SESSION['total']?></span></div></div>
        </div>
    </header>
    <div class="arrow-back">
        <a href="principal.php"><img class="cart" src="./img/left-arrow.svg"></a>
    </div>
    <section class="detail__product">
        
        <div class="detail__image-container">
            <img class="detail__image" src="./img/<?php echo $product->foto?>" alt="imagen de producto">
        </div>

        <div class="detail__info-product">
            <div>Nombre: <?php echo $product->nombre ?></div>
            <div>Marca: <?php echo $product->marca ?></div>
            <div>Cantidadt en stock: <?php echo $product->cantidad ?></div>
            <div>Precio: <?php echo $product->precio ?> &euro;</div>
            <div>
                <form action="vercarrito.php" method="POST">
                    <label for="quantity" class="quantity-label">Cuantas quieres?</label>
                    <input class="quantity__input" type="number" name="quantity" value="1">
                    <input type="hidden" name="id" value="<?php echo $product->idProducto ?>">
                    <input type="hidden" name="name" value="<?php echo $product->nombre ?>">
                    <input type="hidden" name="price" value="<?php echo $product->precio ?>">

                    <button type="submit" class="button button--buy">Comprar</button>
                </form>
            </div>
        </div>

    </section>
</body>
</html>