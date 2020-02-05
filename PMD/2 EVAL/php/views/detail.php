<?php require 'header.php'; ?>

    <section class="container">
        <div class="mt-5 row text-center">
            <img class="col-sm-6" src="./img/<?php echo $product->image ?>">
            <article class="card col-sm-6">
                <div class="card-body">
                    <h5 class="card-title text-truncate"><?php echo $product->name ?></h5>
                    <p class="card-text">Marca: <?php echo $product->brand ?></p>
                    <p class="card-text">Aún nos quedan <?php echo $product->quantity ?> unidades</p>
                    <p class="card-text">Precio: <?php echo $product->price ?> &euro;</p>
                    <form class="row d-flex justify-content-around" action="../../shopping-cart" method="POST">
                        <input class="form-control form-control-sm col-md-2" name="quantity" type="number" value="1" min="1">
                        <input class="btn btn-primary" type="submit" name="addProductToCart" value="A&ntilde;adir al carrito">
                        <input type="hidden" name="productId" value="<?php echo $product->id ?>">
                    </form>
                </div>
            </article>
        </div>
    </section>

<?php require 'footer.php'; ?>