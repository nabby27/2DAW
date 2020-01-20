window.onload = () => {
    let button = document.getElementById('button');
    let modal = document.getElementById('modal');
    let modalBox = document.getElementById('modalBox');

    button.addEventListener('click', () => {
        modal.style.display = 'flex';
    })

    modalBox.addEventListener('click', () => {
        modal.style.display = 'none';
    })
}