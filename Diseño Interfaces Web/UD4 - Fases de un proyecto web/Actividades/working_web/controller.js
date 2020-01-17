let videoElement;
let msgBox;

window.onload = () => {
    document.getElementById('buttonMuted').innerHTML = '<i class="fas fa-volume-mute icon"></i>';
    addCountdown();
    buttonMutedToggle();
}

function addCountdown() {
    
    const countDownDate = new Date(2020,1,26).getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "";
        }
    }, 1000);
}

function buttonMutedToggle() {
    const buttonMuted = document.getElementById('buttonMuted');
    buttonMuted.addEventListener('click', () => {
        const isMuted = document.getElementById('video').muted
        document.getElementById('video').muted = !isMuted;
        if (!isMuted) {
            document.getElementById('buttonMuted').innerHTML = '<i class="fas fa-volume-mute icon"></i>';
        } else {
            document.getElementById('buttonMuted').innerHTML = '<i class="fas fa-volume-up icon"></i>';
        }
    })
}