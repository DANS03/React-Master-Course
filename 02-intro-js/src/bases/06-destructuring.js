console.log('Hello World');

//Destructuring

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


const {name, lastname,age,address} = person;

console.log(name);
console.log(lastname);
console.log(age);