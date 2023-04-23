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

        protected get fullName() {
            return `${this.name} ${this.surnames}`;
        }
    }

    class Developer extends Person {
        constructor(
            _name: string,
            _surnames: string,
            _age: number,
            _phone: string,
            _email: string,
            private _technologies: string[]
        ) {
            super(_name, _surnames, _age, _phone, _email);
        }

        public get technologies() {
            return this._technologies;
        }

        public set technologies(technologies: string[]) {
            this._technologies = technologies;
        }

        public get fullNameFromPerson() {
            return super.fullName;
        }
    }

    const gael: Person = new Person('Gael', 'Pompa Ciambrino', 1);

    console.log(gael);

    const daniel: Developer = new Developer(
        'Daniel',
        'Pompa Pareja',
        48,
        '648 16 78 93',
        'daniel.pompa@gmail.com',
        ['JavaScript', 'TypeScript', 'MongoDB', 'Express', 'React', 'Node.js']
    );

    // daniel.technologies = ['MongoDB', 'Express', 'React', 'Node.js'];

    console.log(daniel);

    console.log(daniel.fullNameFromPerson);
})();