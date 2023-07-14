describe('Tests in <demo.test>', () => {

    test('This test should not fail!' , () => { 
    
        //1. INITIALIZATION of the tests
        const message =  'Hello world';
    
        //2.STIMULANT 
        const message2 = message.trim(); 
    
        //3.WATCH hte behavior 
        expect(message).toBe( message2 ); 
    
    });
} );