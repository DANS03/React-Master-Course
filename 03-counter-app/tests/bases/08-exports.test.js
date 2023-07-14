import { getHeroesById, getHeroesbyOwner } from "../../src/bases/08-exports";

describe('testing  08-exports', () => {

    test('getHeroById must return a hero according to the id', () => {
        const id = 1;
        const hero = getHeroesById(id);
        //console.log(hero);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });

    test('getHeroById must return undefined if the id does not exists', () => {
        const id = 100;
        const hero = getHeroesById(id);
        //console.log(hero);

        expect(hero).toBeFalsy();

    });

    test('getHeroByOwner must return an array of heroes', () => {
        const owner = 'DC';
        const hero = getHeroesbyOwner(owner);
        //console.log(hero);

        expect(hero.length).toBe(3);
        expect(hero).toEqual(
            [{ id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }]);
            
    });


});