<?php

class Image {

    private $folder;
    private $name;
    private $tmp_name;
    private $type;

    function __construct($folder) {
        $this->folder = $folder;
        $this->name =  $_FILES['file']['name'];
        $this->tmp_name =  $_FILES['file']['tmp_name'];
        $this->type =  $_FILES['file']['type'];
    }

    public function is_loaded() {
        $nameAsArray = explode('.', $this->name);
        $extension = array_pop($nameAsArray);
        if (!in_array(strtolower($extension), ['jpg', 'jpeg', 'png', 'gif'])) {
            return false;
        }
        return is_uploaded_file($this->tmp_name);
    }

    public function change_name() {
        $image_name = $this->name;
        if (file_exists($this->folder . $image_name)) {
            $id = uniqid();
            $nameAsArray = explode('.', $this->name);
            $extension = array_pop($nameAsArray);
            $name = join('.', $nameAsArray);
            $image_name = $name . '-' . $id . '.' . $extension;
        }
        $full_name = $this->folder . $image_name;

        $this->name = $full_name;
    }

    public function upload() {
        if ($this->is_loaded()) {
            $this->change_name();
            move_uploaded_file($this->tmp_name, $this->name);
        } else {
            return false;
        }
    }

}