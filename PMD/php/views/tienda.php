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
            <button class="button button--logout">Cerrar sesi&oacute;n</button>
            <div class="account-info__user">Pepito</div>
        </div>
    </header>
    <section class="container-products">

        <?php foreach ($products as $product) : ?>
            <article class="product">
                <img class="product__image" src="./img/<?php echo $product->photo?>" alt="imagen de producto">
                <div class="product__detail">
                    <div class="product__price"><?php echo $product->price ?> &euro;</div>
                    <div class="product__name"><?php echo $product->name ?></div>
                    <a class="product__link" href="detalle.php?idProducto=<?php echo $product->id ?>">Ver m&aacute;s</a>
                </div>
            </article>
        <?php endforeach ?>

    </section>
</body>
</html>