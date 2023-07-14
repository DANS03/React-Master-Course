console.log('Hello World');

//literal objects

const person = {
    name: 'Clark',
    lastname : 'Kent',
    age : 35, 
    address : {
        city :'Metropolis',
        zip : 1243,
        country : 'USA', 
    }
};

//In order to make a copy of the orginal object with just passing to a reference you can use spread {...}

const person2 = {...person };


console.log(person.name);

console.table( {person} );

person2.name = 'Louis';
person2.lastname = 'Lane';

console.table( {person2} );