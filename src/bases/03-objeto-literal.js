const persona ={
    nombre: 'Tonny',
    apellido: 'Stark',
    edad:45,
    direccion: {
        ciudad : 'New York',
        zip:5533331,
        lat:14.3232,
        lng: 34.929292
    }
};

//copiamos los atributos del otro objeto

// a los 3 puntos se le llama operador spread
const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);