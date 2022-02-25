const apiKey = '2gLeIsvsOjKVaudfa48zt2oxH3SexdwK';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then( resp =>{
    resp.json().then( data =>{
        console.log(data)
    })
}).catch(console.warn);

