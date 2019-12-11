let newTeacherButton;
let newReserveButton;
let teacherForm;
let teacherFormName;
let teacherFormModule;
let teacherFormEmail;
let teacherFormUser;
let teacherFormPassword;
let teacherFormRepeatPassword;
let reserveForm;
let reserveFormTeacherContainer;
let reserveFormDate;
let reserveFormHour;
let reserveFormClassroom020;
let reserveFormClassroom021;
let reserveFormClassroomAct;
let reserveFormProjector;

window.onload = () => {
    init();
}

function init() {
    getElements();

    newTeacherButton.addEventListener('click', () => {
        teacherForm.style.display = 'block';
        reserveForm.style.display = 'none';
    });

    newReserveButton.addEventListener('click', () => {
        createSelectForTeachers();
        reserveForm.style.display = 'block';
        teacherForm.style.display = 'none';
    });

    validateTeacherForm();
    validateReserveForm();
    updateVisualReservs();
}

function saveTeacherOnLocalStorage() {
    teachers = getTeachers();
    teachers.push({
        name: teacherFormName.value,
        module: teacherFormModule.value,
        email: teacherFormEmail.value,
        user: teacherFormUser.value,
        password: teacherFormPassword.value
    })
    localStorage.setItem('teachers', JSON.stringify(teachers));
}

function saveReservOnLocalStorage() {
    reservs = getReservs();
    reservs.push({
        teacher: document.getElementsByName('teacher')[0].value,
        date: reserveFormDate.value,
        hour: reserveFormHour.value,
        classroom: getSelectedClasroom(),
        projector: reserveFormProjector.checked
    })
    localStorage.setItem('reservs', JSON.stringify(reservs));

    updateVisualReservs();
}

function updateVisualReservs() {
    let html = '';
    reservs = getReservs();
    for (let index = 0; index < reservs.length; index++) {
        html += '<div class="reserv">' + reservs[index].teacher + ' - ' + reservs[index].date + ' ' + reservs[index].hour + ' - ' + reservs[index].classroom + ' - ' + reservs[index].projector + ' <button id="' + index + '">Borrar</button></div>'
    }
    $('#reservations').html(html)

    addEventListeners();
}

function addEventListeners() {
    reservs = getReservs();
    for (let index = 0; index < reservs.length; index++) {
        $('#'+ index).click(function() {
            removeFromLocalStorage(index);
            updateVisualReservs();
        });
    }
}

function removeFromLocalStorage(index) {
    reservs = getReservs();
    reservs.splice(index, 1);
    localStorage.setItem('reservs', JSON.stringify(reservs));
}

function getSelectedClasroom() {
    const radioButtons = document.getElementsByName('classroom')
    let index = 0;
    let optionSelected;
    while (index < radioButtons.length && !optionSelected) {
        if(radioButtons[index].checked) {
            optionSelected = radioButtons[index];
        }
        index++;
    }
    return optionSelected.value;
}

$.validator.addMethod('checkProjector', function(valor, elemento, arg) {
    const selectedClassroom = getSelectedClasroom();
    return (!reserveFormProjector.checked && selectedClassroom && selectedClassroom == 'Act') || selectedClassroom != 'Act';
}, 'Este aula no tiene proyector');

function validateReserveForm() {
    $('#reserve_form').validate({
        rules: {
            date: {
                required: true,
                date: true
            },
            hour: {
                required: true
            },
            classroom: {
                required: true,
                checkProjector: true
            }
        },
        messages: {
            date: {
                required: "Este campo es obligatorio"
            },
            hour: {
                required: "Este campo es obligatorio"
            },
            classroom: {
                required: "Este campo es obligatorio",
                checkProjector: "Esta sala no tiene proyector"
            }
        },
        submitHandler: function(form) {
            saveReservOnLocalStorage();
            clearFormReserv();
        }
    })
}

function validateTeacherForm() {
    $('#teacher_form').validate({
        rules: {
            name: {
                required: true
            },
            module: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            user: {
                required: true,
                minlength: 6
            },
            password: {
                required: true,
                minlength: 6
            },
            repeat_password: {
                required: true,
                minlength: 6,
                equalTo: teacher_form__password
            }
        },
        messages: {
            name: {
                required: "Este campo es obligatorio"
            },
            module: {
                required: "Este campo es obligatorio"
            },
            email: {
                required: "Este campo es obligatorio",
                email: "Introduce un email correcto"
            },
            user: {
                required: "Este campo es obligatorio",
                minlength: "Deben ser más de 6 caracteres"
            },
            password: {
                required: "Este campo es obligatorio",
                minlength: "Deben ser más de 6 caracteres"
            },
            repeat_password: {
                required: "Este campo es obligatorio",
                minlength: "Deben ser más de 6 caracteres",
                equalTo: "Las contraseñas no coinciden"
            }
        },
        submitHandler: function(form) {
            saveTeacherOnLocalStorage();
            clearFormTeacher();
        }
    })
}

function clearFormTeacher() {
    teacherFormName.clear();
    teacherFormModule.clear();
    teacherFormEmail.clear();
    teacherFormUser.clear();
    teacherFormPassword.clear();
    teacherFormRepeatPassword.clear();
}

function clearFormReserv() {
    reserveFormDate.clear();
    reserveFormHour.clear();
    reserveFormClassroom020.checked = false;
    reserveFormClassroom021.checked = false;
    reserveFormClassroomAct.checked = false;
    reserveFormProjector.clear();
}

function createSelectForTeachers() {
    const teachers = getTeachers();
    let html = '<select name="teacher">';
    teachers.forEach(teacher => {
        html += '<option value="' + teacher.user + '">' + teacher.name + '</option>';
    })
    html += '</select>';
    $('#reserve_form__teacher_container').html(html);
}

function getTeachers() {
    teachers = localStorage.getItem('teachers');
    if (teachers) {
        return JSON.parse(teachers);
    }

    return [];
}

function getReservs() {
    reservs = localStorage.getItem('reservs');
    if (reservs) {
        return JSON.parse(reservs);
    }

    return [];
}

function getElements() {
    newTeacherButton = document.getElementById('new_teacher_button');
    newReserveButton = document.getElementById('new_reserve_button');
    teacherForm = document.getElementById('teacher_form');
    teacherFormName = document.getElementById('teacher_form__name');
    teacherFormModule = document.getElementById('teacher_form__module');
    teacherFormEmail = document.getElementById('teacher_form__email');
    teacherFormUser = document.getElementById('teacher_form__user');
    teacherFormPassword = document.getElementById('teacher_form__password');
    teacherFormRepeatPassword = document.getElementById('teacher_form__repeat_password');
    reserveForm = document.getElementById('reserve_form');
    reserveFormTeacherContainer = document.getElementById('reserve_form__teacher_container');
    reserveFormDate = document.getElementById('reserve_form__date');
    reserveFormHour = document.getElementById('reserve_form__hour');
    reserveFormClassroom020 = document.getElementById('reserve_form__classroom020');
    reserveFormClassroom021 = document.getElementById('reserve_form__classroom021');
    reserveFormClassroomAct = document.getElementById('reserve_form__classroomAct');
    reserveFormProjector = document.getElementById('reserve_form__projector');
}

