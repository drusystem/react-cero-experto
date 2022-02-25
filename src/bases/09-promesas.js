import { getHeroeById } from "./bases/08-import-export";

// const promesa = new Promise((resolve,reject)=>{

//     setTimeout(() => {
//         // console.log('2 segundos después');
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // reject('No se pudo encontrar el héroe');
//     }, 2000);
// });


// promesa.then((heroe)=>{
//     console.log('heroe',heroe);
// }).catch( err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            // console.log('2 segundos después');
            const heroe = getHeroeById(id);

            // heroe===undefined?reject('Héroe no encontrado'):resolve(heroe);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se encontró al héroe');
            }
            // reject('No se pudo encontrar el héroe');
        }, 2000);
    });
}

getHeroeByIdAsync(14)
    .then(console.log)
    .catch(console.warn);