<?php
/** Modelo */

class Base {
    private $link;
    
    function __construct() {
        if (!isset($this->link)) {
            try {
                $this->link = new PDO('mysql:host=localhost;dbname=finaldaw', 'root', '');
                $this->link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $this->link->exec('set names utf8');

            } catch (PDOException $error) {
                require './vistas/error.php';
            }
        }
    }

    function __get($propiedad) {
        return $this->$propiedad;
    }
}

class Jugador  implements \JsonSerializable {
    use JsonSerializer;

    private $idJugador;
    private $nombre;
    private $apellido;
    private $email;
    private $activo;

    function __construct(int $idJugador, string $nombre, string $appellido, string $email, bool $activo) {
        $this->idJugador = $idJugador;
        $this->nombre = $nombre;
        $this->appellido = $appellido;
        $this->email = $email;
        $this->activo = $activo;
    }

    function __get($propiedad) {
        return $this->$propiedad;
    }

    function __set($propiedad, $valor) {
        $this->$propiedad = $valor;
    }

    static function getAllActivo($link): array {
        try {
            $queryString = "SELECT * FROM jugadores WHERE Activo = TRUE";
            $result = $link->prepare($queryString);
            $result->execute();
        } catch (PDOException $error) {
            require './vistas/error.php';
        }

        $jugadores = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $jugador = new Jugador((int) $row['idJugador'], $row['Nombre'], $row['Apellido'], $row['Email'], (bool) $row['Activo']);
            array_push($jugadores, $jugador);
        }

        return $jugadores;
    }

    function buscar($link): ?Jugador {
        try {
            $queryString = "SELECT * FROM jugadores WHERE idJugador = :idJugador";
            $result = $link->prepare($queryString);
            $result->bindValue(':idJugador', $this->idJugador);
            $result->execute();
        } catch (PDOException $error) {
            require './vistas/error.php';
        }

        if ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            return new Jugador((int) $row['idJugador'], $row['Nombre'], $row['Apellido'], $row['Email'], (bool) $row['Activo']);
        }

        return null;
    }

}

class Partida {

    private $titulo;

    function __construct(string $titulo) {
        $this->titulo = $titulo;
    }

    function __get($propiedad) {
        return $this->$propiedad;
    }

    function __set($propiedad, $valor) {
        $this->$propiedad = $valor;
    }

    function maximo($link): int {
        try {
            $queryString = "SELECT max(idPartida) FROM partidas";
            $result = $link->prepare($queryString);
            $result->execute();
        } catch (PDOException $error) {
            require './vistas/error.php';
        }

        $maxLineId = $result->fetch(PDO::FETCH_ASSOC)['max(idPartida)'];
        if ($maxLineId != null) {
            return intval($maxLineId, 10);
        }
        return 0;
    }

    function insertar($link) {
        try {
            $queryString = "INSERT INTO partidas (Titulo, Fecha) VALUES (:titulo, curdate())";
            $result = $link->prepare($queryString);
            $result->bindValue(':titulo', $this->titulo);
            $result->execute();
        } catch (PDOException $errorrror) {
            require './vistas/error.php';
        }
    }
}

class PartidaJugador {

    static function insertarTodas($link, $datos, $modo) {
        if ($modo === 0) {
            foreach ($datos as $jugador) {
                PartidaJugador::insertarUna($link, $jugador);
            }
        } else if ($modo === 1) {
            PartidaJugador::insertarUna($link, $datos);
        }
    }

    private static function insertarUna($link, $jugador) {
        try {
            $queryString = "INSERT INTO partidasjugadores (idJugador, idPartida) VALUES (:idJugador, :idPartida)";
            $result = $link->prepare($queryString);
            $result->bindValue(':idJugador', $jugador->idJugador);
            $result->bindValue(':idPartida', $_COOKIE['idPartida']);
            $result->execute();
        } catch (PDOException $error) {
            require './vistas/error.php';
        }
    }

}

trait JsonSerializer {
    public function jsonSerialize()
    {
        return get_object_vars($this);
    }
}
