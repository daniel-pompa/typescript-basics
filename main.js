"use strict";
(() => {
    class Person {
        constructor(_name, _surnames, _age) {
            this._name = _name;
            this._surnames = _surnames;
            this._age = _age;
        }
    }
    class Developer extends Person {
        technologies() {
            return ['MongoDB', 'Express', 'React', 'Node.js'];
        }
    }
    ;
    class Customer extends Person {
        contact() {
            return 'emma.ciambrino@gmail.com';
        }
    }
    const printFullName = (fullName) => {
        console.log(fullName._name, fullName._surnames);
    };
    const developer = new Developer('Daniel', 'Pompa Pareja', 48);
    console.log(developer);
    console.log(developer.technologies());
    printFullName(developer);
    const customer = new Customer('Emma', 'Ciambrino Baz', 40);
    console.log(customer);
    console.log(customer.contact());
    printFullName(customer);
})();
(() => {
    class Person {
        constructor(_name, _surnames, _age, _phone, _email) {
            this._name = _name;
            this._surnames = _surnames;
            this._age = _age;
            this._phone = _phone;
            this._email = _email;
        }
        get name() {
            return this._name;
        }
        set name(name) {
            this._name = name;
        }
        get surnames() {
            return this._surnames;
        }
        set surnames(surnames) {
            this._surnames = surnames;
        }
        get age() {
            return this._age;
        }
        set age(age) {
            if (age <= 0 || age >= 110) {
                throw new Error('La edad no es válida');
            }
            this._age = age;
        }
        get phone() {
            return this._phone;
        }
        set phone(phone) {
            this._phone = phone;
        }
        get email() {
            return this._email;
        }
        set email(email) {
            this._email = email;
        }
        bio() {
            return `${this._name} ${this._surnames} ${this._age} ${this._phone} ${this._email}`;
        }
    }
    const person = new Person('Daniel', 'Pompa Pareja', 48, '648 15 35 96', 'daniel.pompa@gmail.com');
    console.log(person);
    const gael = new Person('Gael', 'Pompa Ciambrino', 1);
    console.log(gael.name, gael.surnames, gael.age);
})();
(() => {
    class Person {
        constructor(_name, _surnames, _age, _phone, _email) {
            this._name = _name;
            this._surnames = _surnames;
            this._age = _age;
            this._phone = _phone;
            this._email = _email;
        }
        get name() {
            return this._name;
        }
        set name(name) {
            this._name = name;
        }
        get surnames() {
            return this._surnames;
        }
        set surnames(surnames) {
            this._surnames = surnames;
        }
        get age() {
            return this._age;
        }
        set age(age) {
            if (age <= 0 || age >= 110) {
                throw new Error('La edad no es válida');
            }
            this._age = age;
        }
        get phone() {
            return this._phone;
        }
        set phone(phone) {
            this._phone = phone;
        }
        get email() {
            return this._email;
        }
        set email(email) {
            this._email = email;
        }
        bio() {
            return `${this._name} ${this._surnames} ${this._age} ${this._phone} ${this._email}`;
        }
        get fullName() {
            return `${this.name} ${this.surnames}`;
        }
    }
    class Developer extends Person {
        constructor(_name, _surnames, _age, _phone, _email, _technologies) {
            super(_name, _surnames, _age, _phone, _email);
            this._technologies = _technologies;
        }
        get technologies() {
            return this._technologies;
        }
        set technologies(technologies) {
            this._technologies = technologies;
        }
        get fullNameFromPerson() {
            return super.fullName;
        }
    }
    const gael = new Person('Gael', 'Pompa Ciambrino', 1);
    console.log(gael);
    const daniel = new Developer('Daniel', 'Pompa Pareja', 48, '648 16 78 93', 'daniel.pompa@gmail.com', ['JavaScript', 'TypeScript', 'MongoDB', 'Express', 'React', 'Node.js']);
    console.log(daniel);
    console.log(daniel.fullNameFromPerson);
})();
(() => {
    class Person {
        constructor(name, surnames) {
            this.name = name;
            this.surnames = surnames;
        }
        static getInstance() {
            if (!Person.instance) {
                Person.instance = new Person('Daniel', 'Pompa Pareja');
            }
            return Person.instance;
        }
        changeName(newName, newSurnames) {
            this.name = newName;
            this.surnames = newSurnames;
        }
    }
    const person1 = Person.getInstance();
    const person2 = Person.getInstance();
    const person3 = Person.getInstance();
    person1.changeName('Gael', 'Pompa Ciambrino');
    console.log(person1);
    console.log(person2);
    console.log(person3);
})();
//# sourceMappingURL=main.js.map