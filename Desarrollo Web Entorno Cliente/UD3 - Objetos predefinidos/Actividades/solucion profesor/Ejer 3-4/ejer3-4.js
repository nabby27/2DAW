
function esPrimo(numero){
    var primo=true;
    var i=2;
   do{
        if(numero%i==0){
            primo=false;
        }
        i++;
   }while(i<numero);
   return primo;
}

function esPalindromo(cadena){
    var palindromo=true;
   
    var splitString = cadena.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var cadena_alreves = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    for(i=0;i<cadena.length;i++){
        if(cadena[i]!=cadena_alreves[i]){
            palindromo=false;
       }
    }
    return palindromo;
    
}



function calculo(){
    var respuesta=new Array();
    var numero=0;
    var limite=document.getElementById("limite").value;
    for(x=2;x<=limite;x++){
        // Recordamos el palindromo trabaja con cadenas
        if(esPalindromo(x.toString()) && esPrimo(x)){
            numero++;
        respuesta.push(x);
        }
    }
    var ver=confirm("Hay "+numero+" numeros primos y palindromos entre los "+ limite +" primeros numeros, quieres verlos?");
    if(ver){
    document.write(respuesta.join(" ; "));
    }
}
