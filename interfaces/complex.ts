(() => {
    interface Customer {
        name: string;
        surnames: string;
        age?: number;
        phone: string;
        email: string;
        address: Address;
        getFullAddress(id: string): string;
    }

    interface Address {
        id: string;
        postcode: string;
        city: string;
    }

    const customer: Customer = {
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
        getFullAddress(id: string): string {
            if (id !== customer.address.id) {
                throw new Error(`No existe ningun cliente con id ${id}`);
            }
            return `${this.address.postcode} ${this.address.city}`;
        }
    }

    console.log(customer);
    console.log(customer.getFullAddress('8eb13c9f-b27b-4018-8025-64d8f46dfeff'));
})();