//Sin Async

// const getImagenPromesa = () => {
//     const promesa = new Promise((resolve,reject) => {
//         resolve('https://asdasdasd.com')
//     } )

//     return promesa;
// }
// getImagenPromesa().then(console.log);

const  getImage = async() =>{
    try {
        const apiKey = '2gLeIsvsOjKVaudfa48zt2oxH3SexdwK';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // manejo de errores
        console.error(error);
    }

}


getImage()


// const apiKey = '2gLeIsvsOjKVaudfa48zt2oxH3SexdwK';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then( resp => resp.json())
//         .then( ({data}) => {
//             const {url} = data.images.original;
//             const img = document.createElement('img');
//             img.src = url;

//             document.body.append(img);
//         })
//         .catch(console.warn);