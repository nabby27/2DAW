<header class="header sticky-top">
    <nav class="navbar navbar-light bg-light border-bottom border-dark">
        <a class="navbar-brand" href="../../shop">
            <img src="../assets/img/logo_nba.ico" width="60" height="60" class="_a_rotate d-inline-block align-top" alt="">
            <h1 style="display:inline">NBA T-shop</h1>
        </a>
        <?php
        if (isset($_COOKIE['user_name'])) :
        ?>
            <div>
                <a href="../logout">Cerrar sesi&oacute;n</a>
                <div>Bienvenido <?php echo $_COOKIE['user_name'] ?>!</div>
                <a class="btn btn-info _a_buzz" href="../../shopping-cart"><div><i class="fas fa-shopping-cart mx-2"></i><?php echo $shoppingCartTotal ?></div></a>
            </div>
        <?php else : ?>
            <div>
                <a href="../sign-up" class="mx-2">Registrate</a>
                <a href="../login" class="mx-2">Iniciar sesi&oacute;n</a>
                <a class="btn btn-info _a_buzz" href="../../shopping-cart"><div><i class="fas fa-shopping-cart mx-2"></i><?php echo $shoppingCartTotal ?></div></a>
            </div>
        <?php endif ?>
    </nav>
</header>