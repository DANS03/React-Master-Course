//Promises
import { getHeroesById } from "./08-exports";


export const getHeroesByIdAsync = (id) => {

    const iWill = new Promise((resolve, reject) => {

        setTimeout(() => {

            const hero = getHeroesById(id);
            //console.log(hero);
            //console.log('2 seconds delay');

            if (hero) {
                resolve(hero);//this indicates that the promise has been fulfilled, you can also pass arguments with resolved
            }
            else reject('No hero was found with the given id');


        }, 1000);

    });

    return iWill;
};

