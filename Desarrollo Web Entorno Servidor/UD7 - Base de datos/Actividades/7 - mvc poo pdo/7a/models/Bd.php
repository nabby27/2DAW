<?php 

class Bd {

    private $link;

    function __construct() {
        if (!isset($this->link)) {
            $this->link = new PDO('mysql:host=localhost;dbname=virtualmarket', 'root', '');
        }
    }

    function __get($var) {
        return $this->$var;
    }

}