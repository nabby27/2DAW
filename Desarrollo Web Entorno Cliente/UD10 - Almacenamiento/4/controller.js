let reservations;
let newTeacherButton;
let newReserveButton;
let teacherForm;
let teacherFormName;
let teacherFormModule;
let teacherFormEmail;
let teacherFormUser;
let teacherFormPassword;
let teacherFormRepeatPassword;
let teacherFormButton;
let reserveForm;
let reserveFormTeacherContainer;
let reserveFormDate;
let reserveFormHour;
let reserveFormClassroom020;
let reserveFormClassroom021;
let reserveFormClassroomAct;
let reserveFormProjector;
let reserveFormButton;

window.onload = () => {
    init();
}

function init() {
    getElements();

    newTeacherButton.addEventListener('click', () => {
        teacherForm.style.display = 'block';
    });

    newReserveButton.addEventListener('click', () => {
        reserveForm.style.display = 'block';
    });

    teacherFormButton.addEventListener('click', () => {
        saveTeacherOnLocalStorage();
        teacherForm.style.display = 'none';
    })

    reserveFormButton.addEventListener('click', () => {
        saveReservOnLocalStorage();
        reserveForm.style.display = 'none';
    })

    validateReserveForm();
    validateTeacherForm();
}

function saveTeacherOnLocalStorage() {
    // teachers = localStorage.getItem('teachers');
    // if (teachers) {
    //     teachers = JSON.parse(teachers);
    //     teachers[]
    // }
}

function saveReservOnLocalStorage() {

}

function validateReserveForm() {
    $.validator.addMethod('checkProjector', function(valor, elemento, arg) {
        return !checkProjector.checked && classroom.value != 'Act';
    }, 'Este aula no tiene proyector');
    
    $('#reserveForm').validate({
        rules: {
            date: {
                required: "Este campo es obligatorio",
                date: true
            },
            hour: {
                required: "Este campo es obligatorio"
            },
            classroom: {
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
                checkProjector: "Esta sala no tiene proyector"
            }
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
        }
    })
}

function getElements() {
    reservations = document.getElementById('reservations');
    newTeacherButton = document.getElementById('new_teacher_button');
    newReserveButton = document.getElementById('new_reserve_button');
    teacherForm = document.getElementById('teacher_form');
    teacherFormName = document.getElementById('teacher_form__name');
    teacherFormModule = document.getElementById('teacher_form__module');
    teacherFormEmail = document.getElementById('teacher_form__email');
    teacherFormUser = document.getElementById('teacher_form__user');
    teacherFormPassword = document.getElementById('teacher_form__password');
    teacherFormRepeatPassword = document.getElementById('teacher_form__repeat_password');
    teacherFormButton = document.getElementById('teacher_form__button');
    reserveForm = document.getElementById('reserve_form');
    reserveFormTeacherContainer = document.getElementById('reserve_form__teacher_container');
    reserveFormDate = document.getElementById('reserve_form__date');
    reserveFormHour = document.getElementById('reserve_form__hour');
    reserveFormClassroom020 = document.getElementById('reserve_form__classroom020');
    reserveFormClassroom021 = document.getElementById('reserve_form__classroom021');
    reserveFormClassroomAct = document.getElementById('reserve_form__classroomAct');
    reserveFormProjector = document.getElementById('reserve_form__projector');
    reserveFormButton = document.getElementById('reserve_form__button');
}

