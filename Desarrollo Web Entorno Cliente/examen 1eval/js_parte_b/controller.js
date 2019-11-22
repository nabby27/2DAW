let quiz;
let okButton;
let clearButton;

window.onload = function() {
    init(); // empieza el programa cuando cargue la ventana del navegador
}

function init() {
    // copgemos los datos 
    clearButton = $('#clear');
    okButton = $('#ok');
    aciertosDiv = $('#aciertos');
    tiempo = $('#tiempo');
    
    // empezamos el temporizador
    decimas=0;
    idInter = setInterval(() => {
        tiempo.html('Tiempo:' + decimas++);
    },10);

    getJSON(paintHTML); // le pasamos la funcion que queremos que ejecute cuando le llegue la respuesta
    
    $('#clear').click(function (e) { 
        e.preventDefault();
        clear();
    });

    $('#ok').click(function (e) { 
        e.preventDefault();
        getJSON(checkAnswers);
    });
}

// coger los datos del json
function getJSON(functionToCall) {
    $.ajax({
        type: "GET",
        url: "./datos.json",
        dataType: 'json',
        success: (response) => {
            quiz = response;
            functionToCall()
        }
    });
}

// pintar el quiz en el html
function paintHTML() {
    for (let index = 0; index < quiz.preguntas.length; index++) {
        const pregunta = quiz.preguntas[index];
        let html = '<h3 id="' + index + '">' + pregunta.pregunta + '</h3>';

        for (const key in pregunta.respuesta) {
            const value = pregunta.respuesta[key];
            html += '<input id="' + index + key + '" type="radio" name="' + index + ' value="' + value + '">' + key + "=" + value;
        }

        $('#quiz').append(html);
    }
}

function checkAnswers() {
    // parar el tiempo
    clearInterval(idInter);
    decimas=0;

    // guardar las preguntas acertadas
    aciertos = [];
    for (let index = 0; index < quiz.preguntas.length; index++) {
        const pregunta = quiz.preguntas[index];
        for (const key in pregunta.respuesta) {
            if ($('#' + index + key)[0].checked && key == pregunta.correcta) {
                aciertos.push(index);
            }
        }
    }

    // comprobar lso acriertos para poner el color
    for (let index = 0; index < quiz.preguntas.length; index++) {
        if (aciertos.includes(index)) {
            $('#' + index).attr('style', 'background-color:green');
        } else {
            $('#' + index).attr('style', 'background-color:red');
        }
    }

    // poner text de aciertos
    aciertosDiv.html('ACIERTOS: ' + aciertos.length);
}

function clear() {
    // resetear el intervalo
    decimas=0;
    clearInterval(idInter);
    idInter = setInterval(() => {
        tiempo.html('Tiempo:' + decimas++);
    },10);

    // eliminar el texto de axcierto
    aciertosDiv.html('');
    
    // quitar el color de acierto o fallo
    for (let index = 0; index < quiz.preguntas.length; index++) {
        $('#' + index).removeAttr('style');
        
    }
    
    // poner los inputs por defecto sin valor
    inputs = $('input');
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].checked = false;
    }
}