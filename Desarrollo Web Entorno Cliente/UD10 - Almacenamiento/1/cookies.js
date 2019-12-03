function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cookie_name) {
    var decodedCookies = decodeURIComponent(document.cookie);
    var cookiesAsArray = decodedCookies.split(';');

    for (var i = 0; i < cookiesAsArray.length; i++) {
        var cookie = cookiesAsArray[i];
        cookieKey = cookie.split('=')[0];
        cookieValue = cookie.split('=')[1];
        if (cookieKey === cookie_name) {
            return cookieValue;
        }
    }

    return null;
}

function existCookie(cname) {
    var decodedCookies = decodeURIComponent(document.cookie);
    var cookiesAsArray = decodedCookies.split(';');

    for (var i = 0; i < cookiesAsArray.length; i++) {
        var cookie = cookiesAsArray[i];
        cookieKey = cookie.split('=')[0];
        cookieValue = cookie.split('=')[1];
        if (cookieKey === cookie_name) {
            return true;
        }
    }

    return false;
}