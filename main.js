"use strict";
var Validation;
(function (Validation) {
    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;
    class LettersOnlyValidator {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    class ZipCodeValidator {
        isAcceptable(s) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    Validation.ZipCodeValidator = ZipCodeValidator;
    Validation.textValidator = (text) => {
        return (text.length >= 3) ? true : false;
    };
})(Validation || (Validation = {}));
let strings = ['Hola', '28850', '101'];
let validators = {};
validators['código postal'] = new Validation.ZipCodeValidator();
validators['sólo letras'] = new Validation.LettersOnlyValidator();
for (let s of strings) {
    for (let name in validators) {
        console.log(`'${s}' - ${validators[name].isAcceptable(s) ? 'coincide con' : 'no coincide con'} ${name}`);
    }
}
console.log(Validation.textValidator('Gael'));
//# sourceMappingURL=main.js.map