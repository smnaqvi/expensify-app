// const person = {
//     name: 'Andy',
//     age: 26,
//     location: {
//         city: 'Toronto',
//         temp: 14
//     }
// };

// const {name : firstName = 'Anon',age} = person;


// console.log(`${name} is ${age}`);

// const {city, temp: temperature} = person.location;
// if (person.location.city && person.location.temp){
//     console.log(`its ${temperature} C in ${city}`);
// }

// const book = {
//     title :'GOT',
//     author : 'George RR Martin',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name : publisherName = 'Self'} = book.publisher;

// console.log(publisherName);

// Array

const address = ['46 DD ST','Toronto','Ontario','2345'];

const [,city,state] = address;

console.log(`You are in ${city} ${state}. `)

const item = ['Coffee (hot)','$2.00','$2.50']

const [size,,price] = item;

console.log(`A medium ${size} costs ${price}. `)