![TypeScript logo](./assets/images/typescript-logo.svg)

# TypeScript basics

Repository with exercises to understand basic TypeScript concepts.

## What is TypeScript?

TypeScript is a Javascript superset designed for the development of robust applications, as it allows early detection of many of the most basic problems that can occur during the development of a website.

TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.

TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.

TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.

## Learning goals

In this exercises you will apply:

- The different data types that exist in TypeScript
- Functions
- Objects
- Debugging errors and understanding the TypeScript configuration file
- Object-oriented programming
- Create classes in TypeScript
- Create interfaces
- Create namespaces
- Use of generics
- Use decorators

To see the result of the exercises change include in the ```tsconfig.json``` file located in the root of the project. **NOT** in the ```tsconfig.json``` file in the```typescript-node``` directory.

Examples:

```json
"include": [
    "data-types"
]
```

```json
"include": [
    "objects"
]
```

```json
"include": [
    "functions"
]
```

```json
"include": [
    "ES6"
]
```

```json
"include": [
    "classes"
]
```

```json
"include": [
    "interfaces"
]
```

## Modules and Webpack project

This project is in the directory ```typescript-node```

- After download the code, in the ```typescript-node``` directory, run the following command:

```bash
npm install
```

This command will download all the node modules needed to run the project.

- When you have finished installing the ```node_modules```, you can then run the project with the following command:

```bash
npm start
```

For that to work, remember to run that command in the same directory where the ```package.json``` is located.

## Change the port

By default, the port I set for this project is ``8081``, but if you need to change it because that port might be used by your computer, you can change it by opening the ```package.json`` >> scripts. There you will see the instruction that launches the development server

```bash
"scripts": {
    "start": "webpack serve --mode development --open --port=8081"
}
```

Simply change the port to the one you need. Save the changes before running ```npm start``` again.
