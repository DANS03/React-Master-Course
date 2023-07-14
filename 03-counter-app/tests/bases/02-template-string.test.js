import {getFullName} from '../../src/bases/02-template-string'
describe( 'Testing 02 template strings', () => {

    test('Testing getFullname', () => {
        
        const name = 'David';
        const message = getFullName(name)

        expect(message).toBe( `Hello there : ${name}` );
    }); 

} ); 