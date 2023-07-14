import { getActiveUser, getUser } from "../../src/bases/05-functions";


describe('Test in 05 functions', () => {

    test('Testing get active user', () => {
        const name = 'David'

        const testUser = {
            uid: '123544',
            username: name,
        };

        const user = getActiveUser(name);

        expect(testUser).toStrictEqual(user);//when you have to objects js compares them not in values instead in memory location so you have tu use toStrictEqual
    });

    test('getUser must return an object', () => {
        const name = 'David';

        const user = getUser(name);

        expect(user).toStrictEqual({
            uid: '123544',
            username: name
        });


    });

}); 