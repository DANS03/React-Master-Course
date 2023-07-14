console.log('Hello World');

const name = 'David';
const lastname =  'Naranjo';

//const fullname = name + ' ' + lastname; 

const fullname = `  ${name} ${lastname}  `; 

console.log(fullname);

function getFullname( name ) {
    return 'Hello there : '+ name; 
}

console.log(`getFullname = ${getFullname(fullname)}` )