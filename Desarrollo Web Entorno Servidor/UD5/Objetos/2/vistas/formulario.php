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
        Peso:<input type="number" step="0.1" name="peso"><br>
        Precio:<input type="number" step="0.1" name="precio"><br>
        Stock:<input type="number" name="stock"><br>
        Pulgadas:<input type="number" step="0.1" name="pulgadas"><br>
        Capacidad:<input type="number" name="capacidad"><br>
        <select name="producto">
            <option value="monitores">Monitores</option>
            <option value="disco_duro">Disco duro</option>
        </select><br>
    
        <button type="submit" name="enviar">Enviar</button>
    </form>
</body>
</html>