import { heroes } from '../data/heroes';

export const getHeroesById = (id) => {
    return heroes.find( hero =>  hero.id === id  );
}
export const getHeroesbyOwner = (owner) => { 
    return heroes.filter( hero => hero.owner === owner); 
  
}

