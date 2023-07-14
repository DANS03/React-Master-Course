console.log('Hello World');

//functions in js

function greetings(name){
    return `Hello everyone, specially to you : ${name}!!!`
}

console.log(greetings('John'));

const saludar = function greetings(name){
    return `Hello everyone, specially to you : ${name}!!!`
}

console.log(saludar('Juan'));

const saluer = (name) => `Hello everyone, specially to you : ${name}!!!`


console.log(saluer('Jean'));

function getActiveUser(name){
    return{
        uid: '123544',
        username: name,
    }
}

//Exercice 

const getUser = (name) => 
    ( {
    uid: '123544',
    username: name,
    });

console.log(getUser('David'));