console.log('Hello World');

//Destructuring array

const characters  = ['Joker','Batman','Superman'];

const [ char0 ] = characters;

const [ , char1] = characters; //The comma indicates that the first element must be ignored
const [ , , char2] = characters;
console.log(char0);
console.log(char1);
console.log(char2);

const returnArr = () => {
    return ['ABC' , 123];
}

const [ letras  , numeros  ] = returnArr ();

console.log( letras + ' y '+ numeros);

// Let's create a function called useState which gets an arg which is the value to be returned and  a function.

const custom = (value) => {
    return [ value , () => { console.log('Hello world!')}];
}

const [ val , func ] = custom('David');

console.log(val);
func();

