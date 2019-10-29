<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Clients</title>
</head>
<body>
    <table>
        <h1>Wellcome! <?php echo $_SESSION['name']?></h1><a href="index.php?action=logout"><button>Logout</button></a><br><br>
        <a href="index.php?action=create"><button>Create client</button></a>
        <tr><td>DNI</td><td>Nombre</td></tr>
        <?php foreach ($clients as $client): ?>
            <tr>
                <td><?php echo $client->dni ?></td>
                <td><?php echo $client->name ?></td>
                <td><a href="index.php?action=update&dni=<?php echo $client->dni ?>"><button>Edit</button></a></td>
                <td><a href="index.php?action=delete&dni=<?php echo $client->dni ?>"><button>Delete</button></a></td>
            </tr>
        <?php endforeach ?>
    </table>
</body>
</html>