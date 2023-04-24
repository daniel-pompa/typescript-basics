(() => {
    interface IPerson {
        id: string;
        name: string;
        surnames: string;
        age?: number;
        getFullName(id: string): string;
    }

    class Person implements IPerson {
        public id!: string;
        public name!: string;
        public surnames!: string;
        public age!: number;
        getFullName(id: string): string {
            return `${this.name} ${this.surnames}`;
        }
    }

    const person: Person = {
        id: 'dbdb8401-8bbb-4ce3-8eba-f8943e5e756d',
        name: 'Daniel',
        surnames: 'Pompa Pareja',
        age: 48,
        getFullName: function (id: string): string {
            if (id !== this.id) {
                throw new Error(`No existe ninguna persona con id ${id}`);
            }
            return `${this.name} ${this.surnames}`;
        }
    }

    console.log(person);
    console.log(person.getFullName('dbdb8401-8bbb-4ce3-8eba-f8943e5e756d'));
})();