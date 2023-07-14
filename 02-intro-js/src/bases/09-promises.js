//Promises
import { getHeroesById, getHeroesbyOwner } from "./bases/08-exports";


const getHeroesByIdAsync = (id) => {

    const iWill = new Promise((resolve, reject) => {

        setTimeout(() => {

            const hero = getHeroesById(id);
            console.log(hero);
            console.log('2 seconds delay');

            if (hero) {
                resolve(hero);//this indicates that the promise has been fulfilled, you can also pass arguments with resolved
            }
            else reject('No hero was found with the given id');


        }, 2000);

    });

    return iWill;

}


getHeroesByIdAsync(100)
    .then((hero) => {console.log('After the promise comes a then< the hero name passed as an arg is: ' + hero.name);})
    .catch( (err) => {console.warn( err ) } );

