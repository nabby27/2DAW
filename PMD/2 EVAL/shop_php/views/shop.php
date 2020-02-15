<?php require 'head.php'; ?>
<div class="d-none d-md-block">
    <video style="width:100%;height:auto;" autoplay loop muted>
    <source src="../assets/videos/header_video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>
<?php require 'menu.php'; ?>

    <section class="container-fluid mb-5">
        <div class="row mx-sm-5 m-5">
        <?php $itemCount = 0; ?>
            <?php foreach ($products as $product) : ?>
                <?php $itemCount++; ?>
                <div class="col-sm-6 col-lg-4 my-5">
                    <article class="card mx-2">
                        <div class="row">
                            <div class="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                                <img class="img-fluid p-3" src="../assets/img/<?php echo $product->image ?>">
                            </div>
                            <div class="col-12 col-lg-8">
                                <div class="card-body">
                                    <h4 class="card-title text-truncate"><?php echo $product->name ?></h4>
                                    <h5 class="card-text"><?php echo $product->price ?> &euro;</h5>
                                    <div class="row d-flex justify-content-end pr-2">
                                        <a href="detail/<?php echo $product->id ?>" class="btn btn-primary">Ver m&aacute;s</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <?php if ($itemCount % 6 == 0): ?>
                    <div class="col-12">
                        <article class="d-flex justify-content-center align-items-center">
                            <div class="d-none d-md-block">
                                <div class="d-flex justify-content-center align-items-center">
                                    <img class="banner-img img-fluid" src="../assets/img/banner.jpg" alt="">
                                </div>
                            </div>
                            <div class="d-block d-md-none">
                                <div class="d-flex justify-content-center align-items-center">
                                    <img class="banner-img--mobile img-fluid" src="../assets/img/banner-mobile.jpg" alt="">
                                </div>
                            </div>
                        </article>
                    </div>
                <?php endif; ?>
            <?php endforeach ?>
        </div>
    </section>

<?php require 'footer.php'; ?>
