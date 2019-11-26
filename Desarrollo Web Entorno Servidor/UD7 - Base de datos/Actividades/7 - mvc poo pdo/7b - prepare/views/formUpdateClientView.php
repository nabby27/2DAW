<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="#" method="post">
        <input type="hidden" name="dni" value="<?php echo $client->dni ?>">
        DNI: <input type="text" value="<?php echo $client->dni ?>" disabled><br>
        Name: <input type="text" name="name" value="<?php echo $client->name ?>"><br>
        Address: <input type="text" name="address" value="<?php echo $client->address ?>"><br>
        Email: <input type="email" name="email" value="<?php echo $client->email ?>"><br>
        Password: <input type="password" name="password" value="<?php echo $client->password ?>"><br>
        <button type="submit" name="update">Update</button>
    </form>
</body>
</html>