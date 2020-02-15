-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 15, 2020 at 09:57 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

CREATE DATABASE virtualmarket_ivan;
USE virtualmarket_ivan;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+01:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `virtualmarket_ivan`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `dni` varchar(9) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`dni`, `name`, `address`, `email`, `password`, `admin`) VALUES
('11111111A', 'Pepe', 'Calle Monestir de poblet 3 - 3', 'pepe@gmail.com', '$2y$10$n0I0jczZHCLzQJmXOAgCJ.BPDwBkED2cBkNzRpfUUmsORduMjRUg.', 0),
('22222222A', 'Julia', 'Calle San valeriano 2 -3', 'julia@gmail.com', '$2y$10$FT488FHEIGu5wR57X6eLxOKwoB.wmWNaVtCK.13EZEkoD1zwWMT3W', 0),
('88888888A', 'Jose', 'Avenida primado reig 4 - 1', 'jose@gmail.com', '$2y$10$x6qrt8rl3qhzyPWwHI2TYu.bG5CZBr7YRG4HHZxjlYnNBtvhrY2tK', 1),
('99999999A', 'Iván2', 'Calle Álvaro de Bazán 10- 3', 'ivan@gmail.com', '$2y$10$KoJJ5xCxTBH9sVAEgqV70evfhPrJZanIga8I8Z4BbGphX/Dh/C7oa', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `dni_client` varchar(9) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders_lines`
--

CREATE TABLE `orders_lines` (
  `line_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 0,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `brand` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image`, `brand`, `quantity`, `price`) VALUES
(6, 'Doncic Dallas 77', 'camiseta de Doncic en los dallas con el número 77 y el color azul', 'doncic-dallas.jpg', 'Nike', 5, 29.9),
(7, 'Durant Oklahoma 35', 'camiseta de Durant en Oklahoma con el núumero 35 y el color azul', 'durant-oklahoma.jpg', 'Adidas', 3, 25.8),
(8, 'James Lakers 23', 'camiseta de Lebron James en los Lakers y el número 23', 'james-lakers.jpg', 'Nike', 4, 25.5),
(9, 'Jordan Chicago 23', 'camiseta de Jordan en Chicago y número 23', 'jordan-chicago.jpg', 'Nike', 10, 22.8),
(10, 'Allen Miami 34', 'camiseta de Allen en Miami con el número 34', 'allen-miami.jfif', 'Adidas', 3, 24.6),
(11, 'Ricky Jazz 3', 'camiseta de ricky rubio en los Jazz y el número 3', 'ricky-jazz.jpg', 'Nike', 12, 28.5),
(14, 'Curry Golden 30', 'camiseta de Stephen Curry en los Golden States y el número 30', 'curry-golden.jpg', 'Nike', 2, 40),
(15, 'Griffin Pistons 23', 'camiseta de Griffin en los pistons y el número 23', 'griffin-pistons.jpg', 'Adidas', 5, 34),
(16, 'Harden Rocket 13', 'camiseta de Harden en los rockets con el número 13', 'harden-rocket.jpg', 'Nike', 7, 32),
(17, 'Irving Boston 11', 'camiseta de Irving en los bostons con el número 11', 'irving-boston.jpg', 'Nike', 21, 22),
(18, 'Leonard Clipers 2', 'camiseta de leonard en los Clipers con el número 2', 'leonard-clipers.jpg', 'Nike', 10, 23),
(19, 'Paul Thunder 3', 'camiseta de Paul en los Thunder con el número 3', 'paul-thunder.jpg', 'Nike', 11, 30),
(20, 'Walker Boston 8', 'camiseta de walker en Boston con el número 8', 'walker-boston.jpg', 'Nike', 11, 26);

-- --------------------------------------------------------

--
-- Table structure for table `shopping_cart`
--

CREATE TABLE `shopping_cart` (
  `id` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `dni_client` varchar(9) COLLATE utf8_unicode_ci DEFAULT NULL,
  `temp_client_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`dni`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders_lines`
--
ALTER TABLE `orders_lines`
  ADD PRIMARY KEY (`line_id`,`order_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shopping_cart`
--
ALTER TABLE `shopping_cart`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `shopping_cart`
--
ALTER TABLE `shopping_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
