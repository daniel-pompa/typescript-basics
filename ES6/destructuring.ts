(() => {
    type Technologies = {
        typescript: string,
        mongodb: string,
        express: string,
        react: string,
        node: string,
        stack: boolean,
    }
    const technologies = {
        typescript: 'TypeScript',
        mongodb: 'MongoDB',
        express: 'Express',
        react: 'React',
        node: 'Node.js',
        stack: true,
    };

    // Object destructuring
    const { mongodb, express, react, node } = technologies;

    console.log(`${mongodb.charAt(0)}${express.charAt(0)}${react.charAt(0)}${node.charAt(0)} Stack`);

    console.log(`${mongodb} - ${express} - ${react} - ${node}`);

    const printTechnologies = ({ typescript, ...rest }: Technologies) => {
        console.log(typescript, rest)
    };

    printTechnologies(technologies);

    // Array destructuring
    const technologiesArray: [string, string, string, string, string] = ['TypeScript', 'MongoDB', 'Express', 'React', 'Node.js'];

    const [, m, e, r, n] = technologiesArray;

    console.log(m, e, r, n);
})();
