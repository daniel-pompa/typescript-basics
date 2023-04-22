(() => {
    class Customer {
        constructor(
            name = 'name',
            surnames = 'surnames',
            phone = 'phone',
            email = 'email'
        ) {
            this.name = name;
            this.surnames = surnames;
            this.phone = phone;
            this.email = email
        }
    }

    class CustomerPremium extends Customer {
        constructor(name, surnames, phone, email) {
            super(name, surnames, phone, email);
            this.premium = true;
        }
    }

    const daniel = new Customer('Daniel', 'Pompa Pareja', '648 50 98 33', 'daniel.pompa@gmail.com');

    console.log(daniel);

    const emma = new CustomerPremium('Emma', 'Ciambrino Baz', '669 85 64 20', 'emma.ciambrino@gmail.com')

    console.log(emma);
})();