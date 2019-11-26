<?php
try {
    $db = new PDO('mysql:host=localhost;dbname=virtualmarket', 'root', '');
    $result = $db->query('SELECT * from CLIENTES');

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        foreach ($row as $field => $value) {
            echo "$field : $value <br/>";
        }
        echo "<hr/>";
    }
    $db = null;
} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}
