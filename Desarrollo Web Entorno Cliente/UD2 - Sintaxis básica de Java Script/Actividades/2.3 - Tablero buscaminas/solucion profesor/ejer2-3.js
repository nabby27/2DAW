
// Buscaminas

// Declaramos tablero 
var tablero=new Array();
tablero[0]=[0,0,0,0];
tablero[1]=[0,0,0,0];
tablero[2]=[0,0,0,0];
tablero[3]=[0,0,0,0];


function pinto_tablero(){
    for(i=0;i<tablero.length;i++){
        for(j=0;j<=3;j++){ // recorro el tablero
            if(tablero[i][j]!=-1){ // si no es una mina busco el numero de minas
            tablero[i][j]=cuantasMinas(tablero,i,j); // guardo el numero de minas en la misma posicion
            }
            document.getElementById("casilla_"+i+j).value=tablero[i][j]; // gestion de los colores
            if(tablero[i][j]==1){
                document.getElementById("casilla_"+i+j).style.color="blue";
            }
            if(tablero[i][j]==2){
                document.getElementById("casilla_"+i+j).style.color="magenta";
            }
            if(tablero[i][j]==3){
                document.getElementById("casilla_"+i+j).style.color="purple";
            }
            if(tablero[i][j]>3){
                document.getElementById("casilla_"+i+j).style.color="red";
            }
        }
    }
}


function leo_tablero(){ // lo llama el boton
    for(i=0;i<tablero.length;i++){ 
        for(j=0;j<tablero[i].length;j++){
            tablero[i][j]=document.getElementById("casilla_"+i+j).value; //leo los inputs y los copio a la matriz
        }
    }
    pinto_tablero(); //repinto el tablero con las nuevas minas
}

function borro_tablero(){
    for(i=0;i<tablero.length;i++){
        for(j=0;j<=3;j++){ // recorro el tablero
            tablero[i][j]=0;
            document.getElementById("casilla_"+i+j).style.color="black";
        }
    }
    pinto_tablero();
}



// Funcion que dado un tablero y una posicion, indica cuantas minas hay alrededor
function cuantasMinas(tab,x,y){
    var minasEnc=0; //minas encontradas
    if(x>0){
        if(tab[x-1][y]==-1){
            minasEnc++;
        }
    }
    if(x<tab.length-1){
        if(tab[x+1][y]==-1){
            minasEnc++;
        }
    }
    if(y>0){
        if(tab[x][y-1]==-1){
            minasEnc++;
        }
    }
    if(y<tab[x].length-1){
        if(tab[x][y+1]==-1){
            minasEnc++;
        }
    }
    if(y>0 && x>0){
        if(tab[x-1][y-1]==-1){
            minasEnc++;
        }
    }
    if(y>0 && x<tab.length-1){
        if(tab[x+1][y-1]==-1){
            minasEnc++;
        }
    }
    if(x>0 && y<tab[x].length-1){
        if(tab[x-1][y+1]==-1){
            minasEnc++;
        }
    }
    if(x<tab.length-1 && y<tab[x].length-1){
        if(tab[x+1][y+1]==-1){
            minasEnc++;
        }
    }    
    //Devolvemos el resultado
    return minasEnc;
}
