<!DOCTYPE html>
<html lang="en">

<?php require 'head.php';?>

<body>
    <div class="my-5 container text-center">
        <div class="my-5 card text-center">
            <div class="card-header">
                Login
            </div>
            <div class="card-body">
                <form action="../sign-up" method=POST>
                    <div class="row">
                        <div class="form-group col-12 col-md-6">
                            <label for="dni_input">DNI</label>
                            <input class="form-control" name="dni" id="dni_input" type="text">
                        </div>
                        <div class="form-group col-12 col-md-6">
                            <label for="name_input">Nombre</label>
                            <input class="form-control" name="name" id="name_input" type="text">
                        </div>
                        <div class="form-group col-12 col-md-6">
                            <label for="address_input">Dirección</label>
                            <input class="form-control" name="address" id="address_input" type="text">
                        </div>
                        <div class="form-group col-12 col-md-6">
                            <label for="email_input">Email</label>
                            <input class="form-control" name="email" id="email_input" type="email">
                        </div>
                        <div class="form-group col-12 col-md-6">
                            <label for="password_input">Contraseña</label>
                            <input class="form-control" name="password" id="password_input" type="password">
                        </div>
                        <div class="form-group col-12 col-md-6">
                            <label for="password_verify_input">Repite la contraseña</label>
                            <input class="form-control" name="password_verify" id="password_verify_input" type="password">
                        </div>
                        <?php if (isset($error)) : ?>
                            <div class="alert alert-danger col-12" role="alert">
                                <?php echo $error ?>
                            </div>
                        <?php endif ?>
                    </div>
                    <button type="submit" class="btn btn-primary" name="signUp" id="sign_up_button">Registrate</button>
                </form>
            </div>
            <div class="card-footer text-muted">
                <a href="shop">volver a la tienda</a> o
                <a href="../login">inicia sesión</a>
            </div>
        </div>
    </div>
</body>

</html>