<?php

$baseUrl = "https://www.breakingbadapi.com/api/";

function getAllCharacters(){
    global $baseUrl;
    $url = $baseUrl . "characters";

    return callPetition($url);
}

function getAllQuotes(){
    global $baseUrl;
    $url = $baseUrl . "quotes";

    return callPetition($url);
}

function getQuoteByName($name){

    $formatName = str_replace(" ", "+", $name);
    
    global $baseUrl;
    $url = $baseUrl . "quote?author=".$formatName;

    return callPetition($url);
}

function getDeathByName($name){

    $formatName = str_replace(" ", "+", $name);
    
    global $baseUrl;
    $url = $baseUrl . "death-count?name=".$formatName;

    return callPetition($url);
}

function getCharacterByName($name){

    $formatName = str_replace(" ", "+", $name);
    
    global $baseUrl;
    $url = $baseUrl . "characters?name=".$formatName;

    return callPetition($url);
}

function getAllDeaths(){
    global $baseUrl;
    $url = $baseUrl . "deaths";
    
    return callPetition($url);
}

function callPetition($url){
    $opciones = array('http' =>
        array(
            'method'  => 'GET',
            'header'  => 'Content-type: application/json'
        )
    );

    $contexto = stream_context_create($opciones);

    $resultado = file_get_contents($url, false, $contexto);
    return json_decode($resultado, true);
}