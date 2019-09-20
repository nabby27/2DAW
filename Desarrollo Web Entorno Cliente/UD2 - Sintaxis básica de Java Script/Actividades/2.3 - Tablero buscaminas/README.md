Vamos a programar una aplicación web que calcule un tablero del juego del buscaminas.

Al iniciar la página, aparece un tablero de 4x4 casillas, todo a 0, indicando 0 minas, con dos botones,
uno de calcular tablero y otro de borrar tablero.

El usuario puede poner minas en casillas, las minas se marcan con un "-1", cuando acabe clica el botón de calcular tablero

El programa responde indicando en cada casilla el número de minas que hay en casillas adyacentes.

Si hay 1 mina, el texto será azul, si hay 2 magenta, si hay 3 morado y si hay 4 o mas rojo.

Si se pulsa el botón de borro tablero, se vuelve a la situación inicial.

AYUDA: Para cambiar el color se puede utilizar:

document.getElementById(IDENTIFICADOR_INPUT).style.color="COLOR";