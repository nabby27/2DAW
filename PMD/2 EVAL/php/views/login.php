<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/788922d05d.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class="my-5 container text-center">
        <div class="my-5 card text-center">
            <div class="card-header">
                Login
            </div>
            <div class="card-body">
                <form action="../login" method=POST>
                    <div class="row">
                        <div class="form-group col-12 col-md-6">
                            <label for="dni_input">DNI</label>
                            <input class="form-control" name="dni" id="dni_input" type="text">
                        </div>
                        <div class="form-group col-12 col-md-6">
                            <label for="password_input">Contraseña</label>
                            <input class="form-control" name="password" id="password_input" type="password">
                        </div>
                        <?php if (isset($error)) : ?>
                            <div class="alert alert-danger col-12" role="alert">
                                <?php echo $error ?>
                            </div>
                        <?php endif ?>
                    </div>
                    <button type="submit" class="btn btn-primary" id="login_button">Inicia sesi&oacute;n</button>
                </form>
            </div>
            <div class="card-footer text-muted">
                <a href="shop">volver a la tienda</a> o
                <a href="../sign-up">registrate</a>
            </div>
        </div>
    </div>
</body>

</html>