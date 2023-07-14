console.log('Hello World');

//Arrays in js


const array = [];

array.push('hello');
array.push('world');

console.log(array);

let array2 = array;//this will not copy the array this will only pass the address to the new value

array2.push(5);

console.log(array);//push modifies all the object instead of only th reference
console.log(array2);

array2 = [...array,6];

console.log(array);//push modifies all the object instead of only th reference
console.log(array2);