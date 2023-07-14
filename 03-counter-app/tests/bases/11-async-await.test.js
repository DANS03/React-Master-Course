import { getImage } from "../../src/bases/11-async-await";

describe('Test in 11-async-await', () => { 
    test('getImage must return an URL', async () => {
        const url =await getImage();
        
        //console.log(url);

        expect( typeof url).toBe('string'); 

    });
 });