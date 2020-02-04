<?php

function getDniClientAndTempClientId() {
    $dni = null;
    $tempClientId = null;

    if (isset($_COOKIE['user_name'])) {
        $dni = $_COOKIE['dni'];
    }

    $tempClientId = (isset($_COOKIE['tempClientId'])) ? $_COOKIE['tempClientId'] : time() . '-' . uniqid();
    setcookie('tempClientId', $tempClientId, time() + 60*60*24*30); // one month

    return [$dni, $tempClientId];
}