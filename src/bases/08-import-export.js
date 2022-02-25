import heroes,{owners} from '../data/heroes';


export const getHeroeById = (id)=>{
    return heroes.find(item => item.id === id);
}

// console.log(getHeroeById(3));

export const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

// find ? , filter
// console.log(getHeroesByOwner('DC'));


