//Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman'
};

// const {nombre,edad,clave} = persona;

// console.log(nombre);

const useContext = ({nombre,edad, clave, rango='Capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.132,
            lgn: -12.1443
        }
    }
}

const {nombreClave,anios,latlng:{lat,lgn}} = useContext(persona);


console.log(nombreClave,anios);
console.log(lat,lgn);