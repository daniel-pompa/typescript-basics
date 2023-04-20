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
//# sourceMappingURL=main.js.map