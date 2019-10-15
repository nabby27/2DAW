function init() {
    personas = [ persona1 ];
    personas.push(persona2);

    showPersons();
}

function showPersons() {
    personas.forEach((persona) => {
        infoPerson = createInfoPerson(persona);
        buttonSaludo = createButtonSaludo(persona);
        buttonBio = createButtonBio(persona);

        document.body.appendChild(infoPerson);
        document.body.appendChild(buttonSaludo);
        document.body.appendChild(buttonBio);
    });
}

function createInfoPerson(persona) {
    let infoPerson = document.createElement('div');
    infoPerson.innerHTML += persona.nombre_completo.nombre + ' ' + persona.nombre_completo.primer_apellido + ' ' + persona.edad;

    return infoPerson;
}

function createButtonSaludo(persona) {
    let buttonSaludo = document.createElement('button');
    buttonSaludo.innerHTML = 'Saludo';
    buttonSaludo.addEventListener('click', () => seeSaludo(persona));

    return buttonSaludo;
}

function createButtonBio(persona) {
    let buttonBio = document.createElement('button');
    buttonBio.addEventListener('click', () => seeBio(persona));
    buttonBio.innerHTML = 'Bio';

    return buttonBio;
}

function seeSaludo(persona) {
    persona.saludo();
}

function seeBio(persona) {
    persona.bio();
}
