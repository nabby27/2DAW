let dateToCountBack = new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000);

function ini() {   
    let interval = setInterval(() => {
        date = getDateToBackCount();
        printCountToBackOnSpans(date);
        console.log(date);
        if (date <= 0) {
            clearInterval(interval);
        }
    }, 10);
}

function getDateToBackCount() {
    return new Date(dateToCountBack.getTime() - new Date().getTime());
}

function printCountToBackOnSpans(date) {
    document.getElementById('days').innerHTML = date.getDay();
    document.getElementById('hours').innerHTML = date.getHours();
    document.getElementById('minutes').innerHTML = date.getMinutes();
    document.getElementById('seconds').innerHTML = date.getSeconds();
}