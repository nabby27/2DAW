<?php 

class Bd {

    private $link;

    function __construct() {
        if (!isset($this->link)) {
            try {
                $this->link = new PDO('mysql:host=localhost;dbname=virtualmarket', 'root', '');
            } catch (PDOException $e) {
                echo "¡Error!: " . $e->getMessage() . "<br/>";
                die();
            }
        }
    }

    function __get($var) {
        return $this->$var;
    }

}