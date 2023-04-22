"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const technologies = {
        typescript: 'TypeScript',
        mongodb: 'MongoDB',
        express: 'Express',
        react: 'React',
        node: 'Node.js',
        stack: true,
    };
    const { mongodb, express, react, node } = technologies;
    console.log(`${mongodb.charAt(0)}${express.charAt(0)}${react.charAt(0)}${node.charAt(0)} Stack`);
    console.log(`${mongodb} - ${express} - ${react} - ${node}`);
    const printTechnologies = (_a) => {
        var { typescript } = _a, rest = __rest(_a, ["typescript"]);
        console.log(typescript, rest);
    };
    printTechnologies(technologies);
    const technologiesArray = ['TypeScript', 'MongoDB', 'Express', 'React', 'Node.js'];
    const [, m, e, r, n] = technologiesArray;
    console.log(m, e, r, n);
})();
(() => {
    const emma = {
        name: 'Emma',
        surnames: 'Ciambrino Baz',
        phone: '669 79 09 60',
        email: 'emma.ciambrino@gmail.com',
    };
    const daniel = {
        name: 'Daniel',
        surnames: 'Pompa Pareja',
        phone: '648 20 36 85',
        email: 'daniel.pompa@gmail.com',
    };
    const oscar = {
        name: 'oscar',
        surnames: 'Pompa Pareja',
        phone: '656 14 56 34',
        email: 'oscar.pompa@gmail.com',
    };
    const customers = [emma, daniel, oscar];
    for (const customer of customers) {
        console.log(customer);
    }
    for (const customer of customers) {
        console.log(customer.name, customer.email);
    }
})();
//# sourceMappingURL=main.js.map