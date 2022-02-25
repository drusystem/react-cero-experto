//Funciones en JS
// const saludar = function(nombre){
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre)=>{
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre)=> `Hola, ${nombre}`;


console.log(saludar2('Andrés'));

const getUser = () => (
    {
        uid:'ABC123',
        username:'El_Papi1502',
    }
)

//Tarea
//1. Transformar a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
function getUsuarioActivo(nombre){
    return {
        uid:'ABC123',
        username:nombre,
    }
};

const fnFleca = (nombre) => (
    {
        uid:'ABC123',
        username:nombre,
    }
)

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

const usuarioActivo2 = fnFleca('Quispe');
console.log(usuarioActivo2);