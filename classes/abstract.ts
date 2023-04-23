(() => {
    abstract class Person {
        constructor(
            public _name: string,
            public _surnames: string,
            public _age: number,
        ) { }
    }

    class Developer extends Person {
        technologies() {
            return ['MongoDB', 'Express', 'React', 'Node.js'];
        }
    };

    class Customer extends Person {
        contact() {
            return 'emma.ciambrino@gmail.com'
        }
    }

    const printFullName = (fullName: Person) => {
        console.log(fullName._name, fullName._surnames);
    }

    const developer = new Developer('Daniel', 'Pompa Pareja', 48);

    console.log(developer);
    console.log(developer.technologies());

    printFullName(developer);

    const customer = new Customer('Emma', 'Ciambrino Baz', 40);

    console.log(customer);
    console.log(customer.contact());

    printFullName(customer);
})();