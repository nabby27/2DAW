var persona1 = {
    nombre_completo: {
        nombre: 'Bob',
        primer_apellido: 'Smith',
    },
    edad: 32,
    genero: 'masculino',
    intereses: ['música', 'esquí'],
    bio: function () {
        alert(this.nombre_completo.nombre + ' ' + this.nombre_completo.primer_apellido + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
    },
    saludo: function () {
        alert('Hola, Soy ' + this.nombre_completo.nombre + '. ');
    }
};

var persona2 = {
    nombre_completo: {
        nombre: 'Mike',
        primer_apellido: 'Black',
    },
    edad: 25,
    genero: 'masculino',
    intereses: ['música', 'basket'],
    bio: function () {
        alert(this.nombre_completo.nombre + ' ' + this.nombre_completo.primer_apellido + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
    },
    saludo: function () {
        alert('Hola, Soy ' + this.nombre_completo.nombre + '. ');
    }
};