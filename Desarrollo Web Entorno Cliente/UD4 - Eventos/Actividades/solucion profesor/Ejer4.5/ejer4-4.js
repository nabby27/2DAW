
var tablero = new Array; //almaceno las jugadas
tablero[0] = ["_","_","_"];
tablero[1] = ["_","o","_"]; // empieza la máquina con el centro
tablero[2] = ["_","_","_"];
var fin_partida=0;


function pinto_tablero(){  // copio el array a los inputs
    for(var i=0; i<3 ; i++){
        for(var j=0; j<3 ; j++){  // recorro la matriz
            var id_casilla="casilla_"+i+j; 
            if(tablero[i][j]=="o"){
            document.getElementById(id_casilla).innerHTML="<img src='img/o.png'>"; // copio los valors a los inputs, identificandolos por id
            }
            if(tablero[i][j]=="x"){
                document.getElementById(id_casilla).innerHTML="<img src='img/x.png'>"; // copio los valors a los inputs, identificandolos por id
            }
            if(tablero[i][j]=="_"){
                document.getElementById(id_casilla).innerHTML="<img src='img/_.png'>"; // copio los valors a los inputs, identificandolos por id
            }

        }
    }
}



function jugada(casilla){   // cuado hago click en boton ...
   
    console.log(casilla.id);
    casilla_fila_i=casilla.id.substring(8,9);
    casilla_fila_j=casilla.id.substring(9,10);
    console.log("i="+casilla_fila_i+" j="+casilla_fila_j);
    console.log(tablero[casilla_fila_i][casilla_fila_j]);
    
    if(tablero[casilla_fila_i][casilla_fila_j]=="_"){
        tablero[casilla_fila_i][casilla_fila_j]="x";
        pinto_tablero();
        compruebo_filas_columnas_diagonales("x"); // compruebo si ganan las x
        jugada_maquina();   // turno de la máquina
        compruebo_filas_columnas_diagonales("o"); // comprueba si ganan los o
    }
}


function compruebo_filas_columnas_diagonales(jugador){  // compruebo si se gana o empata

        if((tablero[0][0]==tablero[0][1])&&(tablero[0][1]==tablero[0][2])&&(tablero[0][2]==jugador)){ //filas
            alert (" Ha ganado "+jugador);
            location.reload();
        }
        if((tablero[1][0]==tablero[1][1])&&(tablero[1][1]==tablero[1][2])&&(tablero[1][2]==jugador)){
            alert (" Ha ganado "+jugador);
            location.reload();
        }
        if((tablero[2][0]==tablero[2][1])&&(tablero[2][1]==tablero[2][2])&&(tablero[2][2]==jugador)){
            alert (" Ha ganado "+jugador);
            location.reload();
        }
        if((tablero[0][0]==tablero[1][1])&&(tablero[1][1]==tablero[2][2])&&(tablero[2][2]==jugador)){ //diagonales
            alert (" Ha ganado "+jugador);
            location.reload();
        }
        if((tablero[0][2]==tablero[1][1])&&(tablero[1][1]==tablero[2][0])&&(tablero[2][0]==jugador)){
            alert (" Ha ganado "+jugador);
            location.reload();
        }
        if((tablero[0][0]==tablero[1][0])&&(tablero[1][0]==tablero[2][0])&&(tablero[2][0]==jugador)){ //columnas
            alert (" Ha ganado "+jugador);
            location.reload();
        }
        if((tablero[0][1]==tablero[1][1])&&(tablero[1][1]==tablero[2][1])&&(tablero[2][1]==jugador)){
            alert (" Ha ganado "+jugador);
            location.reload();
        }
        if((tablero[0][2]==tablero[1][2])&&(tablero[1][2]==tablero[2][2])&&(tablero[2][2]==jugador)){
            alert (" Ha ganado "+jugador);
            location.reload();
        }
        if(fin_partida==4){   // si la maquina lleva 4 turnos, se acaba en empate
            alert("EMPATE!!!!");
            location.reload();
        }
}

 
function jugada_maquina(){  // turno de la máquina
    jugada_x=Math.floor(Math.random() * 3); //aleatorio 0,1 o 2
    jugada_y=Math.floor(Math.random() * 3);
    if(tablero[jugada_x][jugada_y]=="_"){ // si esta vacío, le pongo un 'o'
        tablero[jugada_x][jugada_y]="o";
        fin_partida++;
        pinto_tablero();      
     }else{    // si no esta vacío, vuelvo a buscar
        jugada_maquina();
    }
}


