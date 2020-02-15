<!DOCTYPE html>
<html lang="en">

<?php require 'head.php'; ?>


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