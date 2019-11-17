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
    <section class="detail__product">
        
        <div class="detail__image-container">
            <img class="detail__image" src="./img/<?php echo $product->photo?>" alt="imagen de producto">
        </div>

        <div class="detail__info-product">
            <div>Nombre: <?php echo $product->name ?></div>
            <div>Marca: <?php echo $product->brand ?></div>
            <div>Cantidadt en stock: <?php echo $product->quantity ?></div>
            <div>Precio: <?php echo $product->price ?> &euro;</div>
            <div>
                <form action="vercarrito.php" method="POST" class="detail__info-buy">
                    <label for="quantity" class="quantity-label">Cuantas quieres?</label>
                    <input class="quantity__input" type="number" name="quantity" min="0" value="1">
                    <input type="hidden" name="id" value="<?php echo $product->id ?>">
                    <input type="hidden" name="name" value="<?php echo $product->name ?>">
                    <input type="hidden" name="price" value="<?php echo $product->price ?>">

                    <button type="submit" class="button button--buy">Comprar</button>
                </form>
            </div>
        </div>

    </section>
</body>
</html>