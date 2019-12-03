// - crear cookies, modificar cookie
    //función que crea una cookie y asigna información y fecha de caducidad.
        //función copiada de https://www.w3schools.com/js/js_cookies.asp
        function setCookie(cname, cvalue, exdays) {
                    var d = new Date();

                    d.setTime(d.getTime() + (exdays*24*60*60*1000));
                    var expires = "expires="+ d.toUTCString();

                    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                }

// - eliminar cookies
    //función que dado el nombre de una cookie (cname) la elimina. 
        
        function removeCookie(cname){
            setCookie(cname,"",-1);
        }
        
// - leer cookies
    //función que dado el nombre de una cookie (cname) devuelve su contenido.

        //función copiada de https://www.w3schools.com/js/js_cookies.asp
        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
        
// - detectar cookie
        //función que dado el nombre de una cookie (cname) devuelve true si existe y tiene contenido y false si no existe o existe pero no contiene contenido.
            function detectCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0 && (name.length != c.length))  {
                    return true;
                }
            }
            return false;
        }