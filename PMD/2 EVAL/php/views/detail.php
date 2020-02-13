<?php require 'header.php'; ?>

    <section class="container">
        <div class="mt-5 row text-center d-flex justify-content-center">
            <div class="w-50">
                <img class="col-sm-6 img-fluid" src="../img/<?php echo $product->image ?>">
            </div>    
            <article class="card col-sm-6">
                <div class="my-3 card-body d-flex flex-column justify-content-around">
                    <h5 class="my-3 card-title text-truncate"><?php echo $product->name ?></h5>
                    <p class="my-3 card-text">Marca: <?php echo $product->brand ?></p>
                    <p class="my-3 card-text">Aún nos quedan <?php echo $product->quantity ?> unidades</p>
                    <p class="my-3 card-text">Precio: <?php echo $product->price ?> &euro;</p>
                    <form class="my-3 row d-flex justify-content-around" action="../../shopping-cart" method="POST">
                        <input class="col-2 form-control form-control-sm" name="quantity" type="number" value="1" min="1">
                        <input class="btn btn-primary" type="submit" name="addProductToCart" value="A&ntilde;adir al carrito">
                        <input type="hidden" name="productId" value="<?php echo $product->id ?>">
                    </form>
                </div>
            </article>
        </div>
    </section>

<?php require 'footer.php'; ?>