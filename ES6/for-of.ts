(() => {
    type Customer = {
        name: string,
        surnames: string,
        phone: string,
        email: string,
    }

    const emma: Customer = {
        name: 'Emma',
        surnames: 'Ciambrino Baz',
        phone: '669 79 09 60',
        email: 'emma.ciambrino@gmail.com',
    }

    const daniel: Customer = {
        name: 'Daniel',
        surnames: 'Pompa Pareja',
        phone: '648 20 36 85',
        email: 'daniel.pompa@gmail.com',
    }

    const oscar: Customer = {
        name: 'oscar',
        surnames: 'Pompa Pareja',
        phone: '656 14 56 34',
        email: 'oscar.pompa@gmail.com',
    }

    const customers: Customer[] = [emma, daniel, oscar];

    for (const customer of customers) {
        console.log(customer);
    }

    for (const customer of customers) {
        console.log(customer.name, customer.email);
    }
})();