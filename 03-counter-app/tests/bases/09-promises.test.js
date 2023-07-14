//By default jest is a synchronous compiler, whe a promise arrives you must use the parameter done

import { getHeroesByIdAsync } from "../../src/bases/09-promises";

describe('testing 09-promises', () => {

    test('getHeroesAsyncById must return a hero', (done) => {
        const id = 1;
        getHeroesByIdAsync(id)
            .then((hero) => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
            });
    });

    test('getHeroesAsyncById must return an error if the id is wrong', (done) => {
        const id = 100;
        getHeroesByIdAsync(id)
            .catch((error) => {

                console.log(error);

                done();

            });
    });

});