$(document).ready(function () {
    $("#form").submit(function (e) {
        $('#contact_succes').modal('show');
        e.preventDefault();
    });
});
