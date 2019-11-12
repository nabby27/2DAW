-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2019 at 06:38 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9
CREATE DATABASE IF NOT EXISTS VIRTUALMARKET_IVAN
CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci';
USE VIRTUALMARKET_IVAN;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `virtualmarket_pmd`
--

-- --------------------------------------------------------

--
-- Table structure for table `clientes`
--

CREATE TABLE `clientes` (
  `dniCliente` varchar(9) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `direccion` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(75) COLLATE utf8_unicode_ci NOT NULL,
  `pwd` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `administrador` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `clientes`
--

INSERT INTO `clientes` (`dniCliente`, `nombre`, `direccion`, `email`, `pwd`, `administrador`) VALUES
('11111111A', 'Pepe', 'Otra la que sea 123', 'ivan@gmail.com', '$2y$10$n0I0jczZHCLzQJmXOAgCJ.BPDwBkED2cBkNzRpfUUmsORduMjRUg.', 0),
('22222222A', 'Julia', 'Mi direccion 123', 'julia@gmail.com', '$2y$10$FT488FHEIGu5wR57X6eLxOKwoB.wmWNaVtCK.13EZEkoD1zwWMT3W', 0),
('88888888A', 'Jose', 'Calle otra 234', 'jose@gmail.com', '$2y$10$x6qrt8rl3qhzyPWwHI2TYu.bG5CZBr7YRG4HHZxjlYnNBtvhrY2tK', 1),
('99999999A', 'Mariano', 'La que sea 123', 'ivan@ivan.ivan', '$2y$10$KoJJ5xCxTBH9sVAEgqV70evfhPrJZanIga8I8Z4BbGphX/Dh/C7oa', 1);

-- --------------------------------------------------------

--
-- Table structure for table `lineas_pedidos`
--

CREATE TABLE `lineas_pedidos` (
  `nLinea` int(2) NOT NULL,
  `cantidad` int(3) NOT NULL,
  `idPedido` int(4) NOT NULL,
  `idProducto` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pedidos`
--

CREATE TABLE `pedidos` (
  `idPedido` int(4) NOT NULL,
  `fecha` date NOT NULL,
  `dirEntrega` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `nTarjeta` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fechaCaducidad` date DEFAULT NULL,
  `matriculaRepartidor` varchar(8) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dniCliente` varchar(9) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `idProducto` int(6) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `foto` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `marca` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cantidad` int(50) DEFAULT NULL,
  `precio` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`idProducto`, `nombre`, `foto`, `marca`, `cantidad`, `precio`) VALUES
(1132, 'Doncic Dallas 77', 'doncic-dallas.jpg', 'Nike', 5, 29.9),
(1133, 'Durant Oklahoma 35', 'durant-oklahoma.jpg', 'Adidas', 3, 25.8),
(1134, 'James Lakers 23', 'james-lakers.jpg', 'Nike', 4, 25.5),
(1135, 'Jordan Chicago 23', 'jordan-chicago.jpg', 'Nike', 10, 22.8),
(1136, 'Allen Miami 34', 'allen-miami.jfif', 'Adidas', 3, 24.6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`dniCliente`);

--
-- Indexes for table `lineas_pedidos`
--
ALTER TABLE `lineas_pedidos`
  ADD PRIMARY KEY (`idPedido`,`nLinea`);

--
-- Indexes for table `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idPedido`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idProducto`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `idProducto` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1144;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
