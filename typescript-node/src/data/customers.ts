interface Customer {
    id: string;
    name: string;
    surnames: string;
    phone?: string;
    email: string;
}

const customers: Customer[] = [
    {
        id: '619bdef6-3168-4e0a-87bc-4ae38ba7fc67',
        name: 'Emma',
        surnames: 'Ciambrino Baz',
        phone: '669 56 45 82',
        email: 'emma.ciambrino@gmail.com'
    },
    {
        id: 'd3fba9c1-6905-415b-87b7-56de34d8c047',
        name: 'Carmen',
        surnames: 'Ciambrino Baz',
        phone: '656 86 32 54',
        email: 'carmen.ciambrino@gmail.com'
    },
    {
        id: '592768f1-b13f-4ec1-b82b-0d1027248dba',
        name: 'Daniel',
        surnames: 'Pompa Pareja',
        phone: '648 55 62 14',
        email: 'daniel.pompa@gmail.com'
    },
    {
        id: 'f3ec4d0c-d728-43dc-ae58-85f295ba29f8',
        name: 'Razvan',
        surnames: 'Ilies',
        email: 'razvan.ilies@gmail.com'
    },
];

export default customers;