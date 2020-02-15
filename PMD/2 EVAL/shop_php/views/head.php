<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>T-Shop</title>
    <link rel="icon" type="image/x-icon" href="../assets/img/logo_nba.ico">

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/788922d05d.js" crossorigin="anonymous"></script>
   
    <link rel="stylesheet" href="../lib/bootstrap/css/bootstrap.min.css">
    <script src="../lib/bootstrap/js/bootstrap.min.js"></script>

    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script> -->
    <style>
        .btn {
            transition: all 0.5s;
        }

        .btn:hover {
            transform: scale(1.05);
        }

        .btn:active {
            transform: scale(0.9);
            box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 
                        0 5px 8px 0 rgba(0,0,0,.14), 
                        0 1px 14px 0 rgba(0,0,0,.12);
        }

        .btn-primary {
            background-color: #1D4289 !important;
            border-color: transparent !important;
            box-shadow: none  !important;
        }

        .btn-secondary {
            background-color: #C80F2E !important;
            border-color: transparent !important;
            box-shadow: none  !important;
        }

        .btn-info {
            background-color: #B542E2 !important;
            border-color: transparent !important;
            box-shadow: none  !important;
        }

        .btn-dark {
            background-color: #303030 !important;
            border-color: transparent !important;
            box-shadow: none  !important;
        }

        .btn-light {
            background-color: #FCFCFC !important;
            border-color: #000 !important;
            box-shadow: none  !important;
        }

        .card {
            border-color: #C80F2E #C80F2E #1D4289 #1D4289 !important;
            border-width: 5px !important;
            transition: all 0.5s;
        }

        .card:hover {
            border-color: #1D4289 #1D4289 #C80F2E #C80F2E !important;
        }

        .card-container--sm {
            width: 10%;
        }

        .card-container--lg {
            width: 40%;
        }

        .banner-img {
            height: 13vw;
        }

        .banner-img--mobiloe {
            width:100%;
            
        }

        .banner-logo {
            position: relative;
            z-index: 99;
        }

        .banner-logo--desktop {
            width: 6vw;
            height: 6vw;
            top: 13vw;
            left: 1vw;
        }

        .banner-logo--mobile {
            width: 16vw;
            height: 16vw;            
            top: 38vw;
            left: 38vw;
        }

        ._a_buzz:hover {
            animation: buzz 0.1s linear infinite alternate;
        }

        ._a_rotate:hover {
            animation: rotate 1s ease infinite normal; /* name duration timing-function dealy iteration-count direction */
        }

        ._a_in-out {
            transition: all 0.5s;
            transform: none;
        }

        ._a_in-out:hover {
            animation: in-out 0.5s linear infinite alternate;
        }

        @keyframes buzz {
            from { transform: rotate(-10deg); }
            to { transform: rotate(10deg); }
        }

        @keyframes in-out {
            from { transform: scale(1); }
            to { transform: scale(1.2); }
        }
        
        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>