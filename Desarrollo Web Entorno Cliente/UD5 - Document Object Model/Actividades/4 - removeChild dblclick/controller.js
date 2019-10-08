let body;
let paragraphs;

function init() {
    body = document.getElementsByTagName('body')[0];
    paragraphs = document.getElementsByTagName('p');

    addEvents();
}

function addEvents() {
    for (let index = 0; index < paragraphs.length; index++) {
        paragraphs[index].addEventListener('dblclick', remove);
        paragraphs[index].addEventListener('click', disappear);
    }
}

function disappear($event) {
    setTimeout(() => {
        $event.target.style.visibility = 'hidden';
    }, 200);
}

function remove($event) {
    let element = $event.srcElement;
    element.parentElement.removeChild(element);
}

function appear() {
    for (let index = 0; index < paragraphs.length; index++) {
        paragraphs[index].style.visibility = 'visible';
    }
}