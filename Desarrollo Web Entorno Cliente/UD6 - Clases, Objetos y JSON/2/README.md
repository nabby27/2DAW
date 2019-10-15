 A partir de este objeto:

```js
var persona = {
    nombre: ['Bob', 'Smith'],
    edad: 32,
    genero: 'masculino',
    intereses: ['música', 'esquí'],
    bio: function () {
        alert(this.nombre[0] + '' + this.nombre[1] + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
    },
    saludo: function() {
        alert('Hola, Soy '+ this.nombre[0] + '. ');
    }
};
```

* Modifica la estructura para que el nombre y el apellido estén en dos propiedades diferentes de la propiedad nombre

* Presenta por pantalla los datos (propiedades) del objeto

* Incluye dos botones para acceder a los dos métodos

* Crea un array de objetos y añade otra persona

* Que Aparezcan todas las personas en pantalla ( recorre el array ) 

* Crea un estructura para añadir personas