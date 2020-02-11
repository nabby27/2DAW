<?php require 'header.php'; ?>

    <section class="container-fluid">
        <form class="m-5" action="../../shopping-cart" method="POST">
            <div class="row m-2 d-flex justify-content-around">
                <input class="my-2 col-12 col-sm-4 col-md-2 btn btn-primary" type="submit" name="updateShoppingCart" value="Actualizar">
                <a class="my-2 col-12 col-sm-4 col-md-2 btn btn-primary" href="../../confirm">Comprar</a>
            </div>
            <div class="row">
                <?php foreach ($products as $product) : ?>
                    <div class="col-12 m-2">
                        <article class="card">
                            <div class="row">
                                <div class="col-md-4">
                                    <img class="img-fluid w-25" src="../../img/<?php echo $product->productImage ?>">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body h-100 row d-flex align-items-center">
                                        <h5 class="card-title col"><?php echo $product->productName ?></h5>
                                        <p class="card-text col"><?php echo $product->productPrice ?> &euro;</p>
                                        <input class="form-control form-control-sm col-1" type="number" min="0" name="quantity[]" value="<?php echo $product->quantity ?>">
                                        <input type="hidden" name="shoppinCartId[]" value="<?php echo $product->shoppinCartId ?>">
                                        <input type="hidden" name="productId[]" value="<?php echo $product->productId ?>">
                                        <a class="col text-dark d-flex justify-content-center align-items-center" href="../../shopping-cart/<?php echo $product->shoppinCartId ?>"><i class="fas fa-trash col d-flex justify-content-center align-items-center"></i></a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                <?php endforeach ?>
            </div>
        </form>
    </section>

<?php require 'footer.php'; ?>