![TypeScript logo](./assets/images/typescript-logo.svg)

# TypeScript basics

Repository with exercises to understand basic TypeScript concepts.

## What is TypeScript?

TypeScript is a Javascript superset designed for the development of robust applications, as it allows early detection of many of the most basic problems that can occur during the development of a website.

TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.

TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.

TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.

More information about TypeScript can be found at the following link [TypeScript](https://www.typescriptlang.org/)

## How to install TypeScript?

Install ```TypeScript``` using your favorite package manager:

```bash
npm install typescript --save-dev
```

```bash
yarn add typescript --dev
```

Globally Installing TypeScript

```bash
npm install -g typescript
```

## Requirements

It is necessary to have installed:

A source code editor such as [VSCode](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/) or any other editor we like.

[![TypeScript](https://img.shields.io/badge/typescrypt-v4.3.5-blue)](https://www.typescriptlang.org/) [![Node.js](https://img.shields.io/badge/node-v18.14.1-green)](https://nodejs.org/es) [![NPM](https://img.shields.io/badge/npm-v9.3.1-red)](https://www.npmjs.com/)

## Learning goals

In this exercise you will apply:

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

To see the result of the exercises change include it in the `tsconfig.json```` file located in the root of the project. **NOT** in the ```tsconfig.json``` file in the```typescript-node``` directory.

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

- After downloading the code, in the ```typescript-node``` directory, run the following command:

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

## Dotenv

Dotenv is a zero-dependency module that loads environment variables from a ```.env``` file into ```process.env```. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

### Install

Install ```dotenv`` using your favorite package manager:

```bash
npm install dotenv --save
```

```bash
yarn add dotenv
```

### Usage

Create a ```.env``` file in the root of your project:

```js
MARVEL_API_KEY='YOUR API KEY HERE'
HASH='HASH GENERATED WITH TIMESTAMP+PRIVATE KEY+PUBLIC KEY'
TS='TIMESTAMP'
```

Import and configure dotenv in ```webpack.config.js```

```js
const webpack = require('webpack');

// Replace accordingly './.env' with the path of your .env file
require('dotenv').config({ path: './.env' });

const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        }),
    ]
};
```

## Express API

This app starts a server and listens on port 3000 for connections. The app responds with “Hello world!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.

```ts
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hola mundo!'
    });
});

app.listen(port, () => {
    console.log(`Aplicación a la escucha en http://localhost:${port}`);
});
```

### What is Express?

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

More information about Express can be found at the following link [Express](https://expressjs.com/)

This project is in the directory ```express-api```

- After downloading the code, in the ```express-api``` directory, run the following command:

```bash
npm install
```

This command will download all the node modules needed to run the project.

- When you have finished installing the ```node_modules```, you can then run the project with the following command:

```bash
npm start
```

For that to work, remember to run that command in the same directory where the ```package.json``` is located.
