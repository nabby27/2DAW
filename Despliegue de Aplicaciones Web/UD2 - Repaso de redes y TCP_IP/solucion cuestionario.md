### 1. Indica de cada IP su clase, máscara de red, parte de red, parte de host,
número de bits de red, número de bits de host, cuántos host tiene la red y si
se trata de direcciones ip públicas o privadas.

| IP | Clase | Mascara de red | Parte de red | Parte de host | Bits red | Bits host | Nº host | Publica/Privada |
|------|------|------|------|------|------|------|------|------|
| 11.2.3.78/8 | A | 255.0.0.0 | 11 | 2.3.78 | 8 | 24 | 16777214 | Publica |
| 152.63.98.45/16 | B | 255.255.0.0 | 152.63 | 98.45 | 16 | 16 | 65534 | Publica |
| 222.222.253.56/24 | C | 255.255.255.0 | 222.222.253 | 56 | 24 | 8 | 254 | Publica |
| 192.168.52.34/24 | C | 255.255.255.0 | 192.168.52 | 34 | 24 | 8 | 254 | Privada |
| 129.23.56.65/16 | B | 255.255.0.0 | 129.23 | 56.65 | 16 | 16 | 65534 | Publica |
| 1.1.1.1/8 | A | 255.0.0.0 | 1 | 1.1.1 | 8 | 24 | 16777214 | Publica |

> Para calcular el Nº de host es ((2^bits de host) - 2)


### 2. Encuentre la IP de red y de broadcast de los siguientes IP de host, averigua
también las dos primeras ip de host de la red y las dos últimas ip de host de
la red:

| IP | IP de red | IP de broadcast | 2 primeras IPs | 2 últimas IPs |
|-----|-----|-----|-----|-----|
| 11.2.3.78/8 | 11.0.0.0 | 11.255.255.255 | 11.0.0.1 - 11.0.0.2 | 11.255.255.254 - 11.255.255.253 |
| 152.63.98.45/16 | 152.63.0.0 | 152.63.255.255 | 152.63.0.1 - 152.63.0.2 | 152.63.255.254 - 152.63.255.253 |
| 222.222.253.56/24 | 222.222.253.0 | 222.222.253.255 | 222.222.253.1 - 222.222.253.2 | 222.222.253.254 - 222.222.253.253 |
| 192.168.52.34/24 | 192.168.52.0 | 192.168.52.255 | 192.168.52.1 - 192.168.52.2 | 192.168.52.254 - 192.168.52.253 |
| 129.23.56.65/16 | 129.23.0.0 | 129.23.255.255 | 129.23.0.1 - 129.23.0.2 | 129.23.255.254 - 129.23.255.253 |
| 1.1.1.1/8 | 1.0.0.0 | 1.255.255.255 | 1.0.0.1 - 1.0.0.2 | 1.255.255.254 - 1.255.255.253 |


### 3. Suponiendo que nuestro ordenador tiene la dirección IP 192.168.5.65 con
máscara por defecto, indicar qué significan las siguientes direcciones
especiales:

* 0.0.0.0 -> no direccionable, desconocido
* 192.168.67.0 ->
* 255.255.255.255 -> direccion virtual para broadcast
* 192.130.10.255 ->
* 127.0.0.1 -> direccion virtual del host


### 4. Si envió un ping ¿que protocolo entra en funcionamiento?

ICMP (Internet Control Message Protocol) - Protocolo de control de mensajes de internet


### 5. La dirección IPV4, ¿Cuántos bits tiene?

32

### 6. La máscara de red:

* a) Nos sirve para identificar la parte de red y de host de una dirección IP.
* b) La máscara de red estándar para las direcciones IP de clase A es 255.255.255.0
* c) La máscara de red estándar para las direcciones IP de clase C es 255.255.255.0.
* **d) Las respuestas a) y c) son correctas.**


### 7. La puerta de enlace:

* a) Suele indicarnos la salida a internet.
* b) Generalmente es la dirección IP del router.
* c) La dirección de la puerta de enlace es la misma para todos los host de la misma red
local.
* **d) Todas las respuestas anteriores son correctas.**


### 8. Diferencias entre los protocolos de transporte TCP y UDP.

| UDP | TCP |
|-----|-----|
| No orientado a conexión | Orientado a conexión |
| No realiza control de errores (no fiable) | Control de errores |
| Datagramas UDP | Segmentos TCP |
| Envío de datos más rápidos | |


### 9. Función de los puertos bien conocidos. Da un ejemplo.

Reservados para servicios en red. ejemplos:

| PUERTO | PROTOCOLO | SERVICIO | DESCRIPCION |
|-----|-----|-----|-----|
| 20 | tcp | FTP | Transferencia de datos |
| 21 | tcp | FTP | Control de datos |
| 22 | tcp | SSH | Control de datos |
| 23 | tcp | TELNET | Manejo remoto de equipo |
| 25 | tcp | SMTP | Transferencia de correo |
| 80 | tcp | HTTP | Transferencia de HyperTexto |
| 143 | tcp | IMAP | Acceso de mensajes |
| 443 | tcp | HTTPS | Transferencia de HyperTexto seguro |
