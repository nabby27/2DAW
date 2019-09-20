Vamos a realizar una aplicación web con el juego del tres en raya

En el html tendremos 9 casillas con entrada de texto y un botón para cambiar de turno

Cada casilla pude tener tres valores:

'_' si esta vacía
'o' jugada de la máquina
'x' jugada del usuario

La partida siempre empieza con la casilla del centro como primera jugada de la máquina.

El usuario escribe una x en la casilla elegida y pulsa al botón de cambio de turno.

La máquina, de manera aleatoria realiza su tirada.

Si en algunas de las tiradas un jugador hace tres en raya, aparece el alert " Ha ganado [jugador] "
y recarga la página ( location.reload() ) . Si no gana nadie, después de la última jugada aparece el alert " Empate !!" y recarga la página.

Cuando la máquina hace una tirada, la casilla se deshabilita.

En el caso que el usuario escriba cualquier símbolo que no sea 'x', se le cambiará por una 'x'

El código javascript ha de estar separado del html, recuerda utilizar funciones para facilitar el trabajo.