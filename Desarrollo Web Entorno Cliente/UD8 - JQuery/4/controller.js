let provincias;
let municipios;

$(document).ready(() => {
    loadProvincias();
    
    $('#provincias').change(function (e) { 
        e.preventDefault();
        clearTextValues();
        loadMunicipios();
    });

    $('#municipios').change(function (e) { 
        e.preventDefault();
        setTextValues();
    });
})

function loadProvincias() {
    $.ajax({
        url: "./cargaProvinciasJSON.php",
        type: "post",
        dataType: 'json',
        data: {},
        success: function(response) {
            provincias = response;
            setProvinciasDataOnSelect();
        },
        error: function (header, status, error) {
            console.error(error);
        }
    });
}

function loadMunicipios() {
    let cod = $('#provincias option:selected').val();
    $.ajax({
        url: "./cargaMunicipiosJSON.php",
        type: "post",
        dataType: 'json',
        data: {provincia: cod},
        success: function(response) {
            municipios = response;
            setMunicipiosDataOnSelect();
        },
        error: function (header, status, error) {
            console.error(error);
        }
    });
}

function setProvinciasDataOnSelect() {
    Object.keys(provincias).forEach(provincia_cp => {
        $('#provincias').append('<option value=' + provincia_cp + '>' + provincias[provincia_cp] + '</option>');
    })
}

function setMunicipiosDataOnSelect() {
    $('#municipios').html('');
    Object.keys(municipios).forEach(municipio_cp => {
        $('#municipios').append('<option value=' + municipio_cp + '>' + municipios[municipio_cp] + '</option>');
    })
}

function setTextValues() {
    let provincia_name = $('#provincias option:selected').text();
    let municipio_name = $('#municipios option:selected').text();
    $('#seleccion').html('Provincia: ' + provincia_name + ' - Municipio: ' + municipio_name);
}

function clearTextValues() {
    $('#seleccion').html('Respuesta');
}