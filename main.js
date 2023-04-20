"use strict";
(() => {
    const greeting = 'Hola mundo!';
    console.log(greeting);
})();
(() => {
    let avenger = 123;
    avenger = 'Iron Man';
    console.log({ avenger });
    console.log(avenger.charAt(0));
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log({ numbers });
    const technologies = ['TypeScript', 'MongoDB', 'Express', 'Node.js', 'React'];
    technologies.forEach((tech, i) => console.log(`[${i}] ${tech}`));
})();
(() => {
    let isWolverine = true;
    const wolverine = isWolverine ? 'Wolverine' : false;
    console.log({ isWolverine });
    console.log(wolverine);
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudioLevel = AudioLevel.medium;
    console.log(AudioLevel);
    console.log(currentAudioLevel);
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
})();
(() => {
    let nothing = undefined;
    console.log(nothing);
    let isActive = null;
    console.log(isActive);
})();
(() => {
    const balance = 300;
    const pay = 500;
    const creditCard = true;
    console.log({ balance });
    console.log({ pay });
    console.log({ creditCard });
    if (balance >= pay) {
        console.log('Puedes pagar con tu saldo');
    }
    else if (creditCard) {
        console.log('Puedes pagar con tu tarjeta de crédito');
    }
    else {
        console.log('No tienes saldo suficiente');
    }
})();
(() => {
    const typeScript = 'TypeScript';
    const javaScript = 'JavaSCript';
    console.log(typeScript.toUpperCase());
    console.log(`${typeScript} is a ${javaScript} superset`);
})();
(() => {
    const hero = ['Hulk', 100, false];
    hero[0] = 'Wolverine';
    hero[1] = 90;
    hero[2] = true;
    console.log(hero);
})();
(() => {
    function greeting(message) {
        console.log(message);
    }
    greeting('Hola mundo!!');
})();
(() => {
    const fullName = (firstName, lastName, upperCase = false) => {
        if (upperCase) {
            return `${firstName} ${lastName || ''}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || ''}`;
        }
    };
    const name = fullName('Gael', 'Pompa', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    const name = fullName('Gael');
    console.log({ name });
})();
(() => {
    function maxOfTwoNumbers(a, b) {
        if (a > b) {
            return a;
        }
        else {
            return b;
        }
    }
    const max = maxOfTwoNumbers(48, 40);
    console.log({ max });
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Gael', 'Pompa');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const name = fullName('Gael', 'Pompa', 'Ciambrino');
    console.log({ name });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const myBelovedSon = () => 'Gael Pompa Ciambrino';
    let myFunction = myBelovedSon;
    myFunction = myBelovedSon;
    console.log({ myFunction });
    console.log(myFunction());
})();
(() => {
    const hero = 'Wolverine';
    function returnName() {
        return hero;
    }
    const heroName = returnName();
    console.log({ heroName });
})();
(() => {
    var _a, _b, _c, _d;
    const daniel = {
        name: 'Daniel',
        surnames: 'Pompa Pareja',
        age: 48,
        email: 'daniel.pompa@gmail.com',
        getName() {
            return this.name;
        },
        getSurnames() {
            return this.surnames;
        },
        getAge() {
            return this.age;
        },
        getEmail() {
            return this.email;
        },
    };
    console.log(daniel);
    console.log((_a = daniel.getName) === null || _a === void 0 ? void 0 : _a.call(daniel));
    console.log((_b = daniel.getSurnames) === null || _b === void 0 ? void 0 : _b.call(daniel));
    console.log((_c = daniel.getAge) === null || _c === void 0 ? void 0 : _c.call(daniel));
    console.log((_d = daniel.getEmail) === null || _d === void 0 ? void 0 : _d.call(daniel));
})();
(() => {
    var _a, _b, _c, _d;
    const daniel = {
        name: 'Daniel',
        surnames: 'Pompa Pareja',
        age: 48,
        email: 'daniel.pompa@gmail.com',
        getName() {
            return this.name;
        },
        getSurnames() {
            return this.surnames;
        },
        getAge() {
            return this.age;
        },
        getEmail() {
            return this.email;
        },
    };
    console.log(daniel);
    console.log((_a = daniel.getName) === null || _a === void 0 ? void 0 : _a.call(daniel));
    console.log((_b = daniel.getSurnames) === null || _b === void 0 ? void 0 : _b.call(daniel));
    console.log((_c = daniel.getAge) === null || _c === void 0 ? void 0 : _c.call(daniel));
    console.log((_d = daniel.getEmail) === null || _d === void 0 ? void 0 : _d.call(daniel));
})();
(() => {
    let myCustomVariable = 'Daniel';
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
    myCustomVariable = 48;
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Gael',
        surnames: 'Pompa Ciambrino',
        age: 1,
    };
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
})();
//# sourceMappingURL=main.js.map