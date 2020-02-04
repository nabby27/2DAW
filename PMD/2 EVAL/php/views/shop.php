<?php require 'header.php'; ?>

    <section class="container-fluid">
        <div class="row mx-sm-5">
            <?php foreach ($products as $product) : ?>
                <div class="col-sm-6 col-lg-4">
                    <article class="card mx-2 my-4">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="./img/<?php echo $product->photo ?>">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title text-truncate"><?php echo $product->name ?></h5>
                                    <p class="card-text"><?php echo $product->price ?> &euro;</p>
                                    <a href="detail/<?php echo $product->id ?>" class="btn btn-primary">Ver m&aacute;s</a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            <?php endforeach ?>
        </div>
    </section>

<?php require 'footer.php'; ?>
