<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>T-Shop</title>
    <link rel="icon" type="image/x-icon" href="../img/logo_nba.ico">

    <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.min.css">
    <script src="../assets/bootstrap/css/bootstrap.min.js"></script>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/788922d05d.js" crossorigin="anonymous"></script>
</head>

<body>
    <header class="header">
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="../../shop">
                <img src="../img/logo_nba.ico" width="30" height="30" class="d-inline-block align-top" alt="">
                NBA T-shop
            </a>
            <?php
            if (isset($_COOKIE['user_name'])) :
            ?>
                <div>
                    <a href="../logout">Cerrar sesi&oacute;n</a>
                    <div>Bienvenido <?php echo $_COOKIE['user_name'] ?>!</div>
                    <a class="badge badge-secondary" href="../../shopping-cart"><div><i class="fas fa-shopping-cart mx-2"></i><?php echo $shoppingCartTotal ?></div></a>
                </div>
            <?php else : ?>
                <div>
                    <a href="../sign-up" class="mx-2">Registrate</a>
                    <a href="../login" class="mx-2">Iniciar sesi&oacute;n</a>
                    <a class="badge badge-secondary" href="../../shopping-cart"><div><i class="fas fa-shopping-cart mx-2"></i><?php echo $shoppingCartTotal ?></div></a>
                </div>
            <?php endif ?>
        </nav>
    </header>