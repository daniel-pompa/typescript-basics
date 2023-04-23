(() => {
    /* Singleton is a creational design pattern, which ensures that only one object of its kind exists and provides a single point of access to it */

    // The Person class defines the `getInstance` method that allows access to the single instance of the person.
    class Person {
        private static instance: Person;

        // The Person constructor should always be private to prevent direct construction calls with the`new` operator.
        private constructor(public name: string, public surnames: string) { }

        // The static method that controls the access to the person instance.
        public static getInstance(): Person {
            if (!Person.instance) {
                Person.instance = new Person('Daniel', 'Pompa Pareja');
            }

            return Person.instance;
        }

        changeName(newName: string, newSurnames: string): void {
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