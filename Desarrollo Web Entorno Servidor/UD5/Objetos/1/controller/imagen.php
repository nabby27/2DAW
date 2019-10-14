<?php

class Imagen {

    private $name;
    private $tmp_name;
    private $type;

    public function is_loaded() {
        return is_uploaded_file($_FILES['file']['tmp_name']);
    }

    public function change_name() {
        $dir = '../img/';
        $image_name = $_FILES['file']['name'];
        if (file_exists($dir . $image_name)) {
            $id = uniqid();
            $nameAsArray = explode('.', $name);
            $extension = array_pop($nameAsArray);
            $name = join('.', $nameAsArray);
            $image_name = $name . '-' . $id . '.' . $extension;
        }
        $full_name = $dir . $image_name;

        $this->name = $full_name;
    }

    public function upload() {

    }

}