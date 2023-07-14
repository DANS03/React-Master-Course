import { returnArr } from "../../src/bases/07-des-arrs";

describe('Tests in 07-des-arrs', () => {

    test('Must return an string and a number', () => { 
        const [letters , numbers] = returnArr();

        expect( typeof letters ).toBe( 'string' );
        expect(  typeof numbers ).toBe( 'number' );
    });

});