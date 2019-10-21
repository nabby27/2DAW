<?php
$files = scandir('./docs');

unset($files[0]);
unset($files[1]);

$products = [];

foreach ($files as $file) {
    $nameFile = explode('.', $file);
    $nameFileAsArray = explode('_', $nameFile[0]);
    
    $hardware = $nameFileAsArray[0];
    $company = $nameFileAsArray[1];
    $code = $nameFileAsArray[2];
    
    array_push($products, [$hardware, $company, $code]);
}

foreach ($products as $product) {
    echo $product[0] . ' - ' . $product[1] . ' - ' . $product[2] . '<br>';
}