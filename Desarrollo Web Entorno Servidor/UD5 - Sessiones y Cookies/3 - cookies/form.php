<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        Dni: <input type="text" name="dni"><br>
        Password: <input type="password" name="password"><br>
        <button type="submit" name="login">Login</button><br>
        <?php echo $error; ?>
    </form>
</body>
</html>