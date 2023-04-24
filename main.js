"use strict";
(() => {
    ;
    const daniel = {
        name: 'Daniel',
        surnames: 'Pompa Pareja',
        age: 48,
        email: 'daniel.pompa@gmail.com',
        getName() {
            return this.name;
        },
        getSurnames() {
            return this.surnames;
        },
        getAge() {
            return this.age;
        },
        getEmail() {
            return this.email;
        },
    };
    console.log(daniel);
})();
(() => {
    class Person {
        getFullName(id) {
            return `${this.name} ${this.surnames}`;
        }
    }
    const person = {
        id: 'dbdb8401-8bbb-4ce3-8eba-f8943e5e756d',
        name: 'Daniel',
        surnames: 'Pompa Pareja',
        age: 48,
        getFullName: function (id) {
            if (id !== this.id) {
                throw new Error(`No existe ninguna persona con id ${id}`);
            }
            return `${this.name} ${this.surnames}`;
        }
    };
    console.log(person);
    console.log(person.getFullName('dbdb8401-8bbb-4ce3-8eba-f8943e5e756d'));
})();
(() => {
    const customer = {
        name: 'Emma',
        surnames: 'Ciambrino Baz',
        age: 40,
        phone: '669 85 34 67',
        email: 'emma.ciambrino@gmail.com',
        address: {
            id: '8eb13c9f-b27b-4018-8025-64d8f46dfeff',
            postcode: '28850',
            city: 'Madrid'
        },
        getFullAddress(id) {
            if (id !== customer.address.id) {
                throw new Error(`No existe ningun cliente con id ${id}`);
            }
            return `${this.address.postcode} ${this.address.city}`;
        }
    };
    console.log(customer);
    console.log(customer.getFullAddress('8eb13c9f-b27b-4018-8025-64d8f46dfeff'));
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return a + b;
    };
    console.log(addNumbersFunction(48, 40));
})();
//# sourceMappingURL=main.js.map