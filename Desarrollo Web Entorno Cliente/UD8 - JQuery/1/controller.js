$(document).ready(() => {
    
    $('#esconder').click(() => {
        $('article').hide();
    });
    
    $('#ensenar').click(() => {
        $('article').show();
    });

    $('#anado').click(() => {
        $('section').append("<article>Articulo anyadido</article>");
    });

    $('#quito').click(() => {
        $('article:last-child').remove();
    });

    console.time("jquery test")
    const div = $('#esconder')
    console.timeEnd("jquery test")
    
    console.time("js test")
    const vainillaDiv = document.getElementById('#esconder')
    console.timeEnd("js test")
})
