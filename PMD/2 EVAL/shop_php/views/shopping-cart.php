<?php require 'head.php'; ?>
<?php require 'menu.php'; ?>
<?php $sum = 0; ?>
    <section class="container">
        <form class="m-5" action="../../shopping-cart" method="POST">
            <div class="row m-2 d-flex justify-content-around">
                <input class="my-2 col-12 col-sm-4 col-md-2 btn btn-primary" type="submit" name="updateShoppingCart" value="Actualizar">
                <a class="my-2 col-12 col-sm-4 col-md-2 btn btn-info _a_in-out" href="../../confirm">Comprar</a>
            </div>
            <div class="row">
                <?php foreach ($products as $product) : ?>
                    <?php $sum += $product->productPrice * $product->quantity; ?>
                    <div class="col-12 m-2">
                        <article class="card">
                            <div class="row">
                                <div class="col-12 col-md-2 d-flex justify-content-center">
                                    <img class="w-75 img-fluid" src="../../assets/img/<?php echo $product->productImage ?>">
                                </div>
                                <div class="col-12 col-md-10">
                                    <div class="row p-3 h-100 row d-flex justify-content-center align-items-center">
                                        <span class="col-8 col-md-4"><?php echo $product->productName ?></span>
                                        <span class="col-4 col-md-3"><?php echo $product->productPrice ?> &euro;</span>
                                        <input class="form-control form-control-sm col-10 col-sm-3 my-2" type="number" min="0" name="quantity[]" value="<?php echo $product->quantity ?>">
                                        <input type="hidden" name="shoppinCartId[]" value="<?php echo $product->shoppinCartId ?>">
                                        <input type="hidden" name="productId[]" value="<?php echo $product->productId ?>">
                                        <a class="my-2 col-10 col-sm-9 col-md-2 text-dark d-flex justify-content-end align-items-center" href="../../shopping-cart/<?php echo $product->shoppinCartId ?>"><i class="fas fa-trash col-6 col d-flex justify-content-end align-items-center"></i></a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                <?php endforeach ?>
            </div>
            <div class="d-flex justify-content-end">
                <h5>Precio total: <strong><?php echo $sum; ?> €</strong></h5>
            </div>
        </form>
    </section>

<?php require 'footer.php'; ?>