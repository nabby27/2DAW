<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles/admin-panel.css">
    <!-- <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/login.js"></script> -->
    <title>Login</title>
</head>
<body>
    <div class="login">
        <form action="" method=post class="login__box">
            <div class="login-box__title">Login</div>
            <div class="login-box__content">
                <div class="field-group">
                    <label class="label" for="dni_input">DNI:</label>
                    <input class="input input--text" id="dni_input" name="dni" type="text">
                </div>
                <div class="field-group">
                    <label class="label" for="password_input">Contraseña:</label>
                    <input class="input input--text" id="password_input" name="password" type="password">
                </div>
                <div class="login-error">
                    <?php echo $error ?>
                </div>
                <button class="button" type="submit" id="login_button">Login</button>
            </div>
        </form>
    </div>
    
    <!-- <div id="modal" class="modal">
        <div class="modal__box">
            <span class="modal-box__text">El usuario no existe o la contraseña es incorrecta</span>
            <button id="button_close_modal" class="button">Aceptar</button>
        </div>
    </div> -->
</body>
</html>