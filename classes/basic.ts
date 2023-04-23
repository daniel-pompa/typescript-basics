(() => {
    class Person {
        constructor(
            private _name: string,
            private _surnames: string,
            private _age: number,
            private _phone?: string,
            private _email?: string
        ) { }

        public get name() {
            return this._name;
        }

        public set name(name: string) {
            this._name = name;
        }

        public get surnames() {
            return this._surnames;
        }

        public set surnames(surnames: string) {
            this._surnames = surnames;
        }

        public get age() {
            return this._age;
        }

        public set age(age: number) {
            if (age <= 0 || age >= 110) {
                throw new Error('La edad no es válida');
            }
            this._age = age;
        }

        public get phone() {
            return this._phone!;
        }

        public set phone(phone: string) {
            this._phone = phone;
        }

        public get email() {
            return this._email!;
        }

        public set email(email: string) {
            this._email = email;
        }

        public bio() {
            return `${this._name} ${this._surnames} ${this._age} ${this._phone} ${this._email}`;
        }
    }

    const person = new Person('Daniel', 'Pompa Pareja', 48, '648 15 35 96', 'daniel.pompa@gmail.com');

    // person.name = 'Óscar';
    // person.email = 'oscar.pompa@gmail.com'

    console.log(person);

    const gael: Person = new Person('Gael', 'Pompa Ciambrino', 1);

    console.log(gael.name, gael.surnames, gael.age);
})();