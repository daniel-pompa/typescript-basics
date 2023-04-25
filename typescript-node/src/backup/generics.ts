import { Person } from '../classes/Person';
import { ICustomer, IDeveloper } from '../interfaces';
import customers from '../data/customers';
import { genericFunction } from '../generics/functions';

/* Generics */

// Developer
const daniel = {
    name: 'Daniel',
    surnames: 'Pompa Pareja',
    technologies: ['Typescript', 'MongoDB', 'Express', 'React', 'Node.js']
}

console.log(genericFunction<IDeveloper>(daniel));
console.log(genericFunction<IDeveloper>(daniel).technologies);

// Customer
const emma = {
    name: 'Emma',
    surnames: 'Ciambrino Baz',
    phone: '669 87 80 20',
    email: 'emma.ciambrino@gmail.com',
    premium: true
}

console.log(genericFunction<ICustomer>(emma));

// Person
const gael = {
    name: 'Gael',
    surnames: 'Pompa Ciambrino',
    age: 1
}

console.log(genericFunction<Person>(gael));

// Array of customers
console.log(genericFunction(customers));
