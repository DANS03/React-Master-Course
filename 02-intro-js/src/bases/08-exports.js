//Imports and exports

import { heroes } from '../data/heroes';

//console.log('Hello World');


//console.log(heroes)

const getHeroesById = (id) => {
    return heroes.find( hero =>  hero.id === id  );
}

//console.log(getHeroesById(2));

const getHeroesbyOwner = (owner) => { 
    return heroes.filter( hero => hero.owner === owner); 
    
}

//console.log(getHeroesbyOwner('Marvel'));

export {getHeroesById , getHeroesbyOwner} 

