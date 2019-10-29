<?php 

class Bd {

    private $link;

    function __construct() {
        if (!isset($this->link)) {
            $this->link = new mysqli('localhost', 'root', '', 'virtualmarket');
            $this->link->set_charset('UTF-8');
        }
    }

    function __get($var) {
        return $this->$var;
    }

}