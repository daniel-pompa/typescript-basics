namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;

    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }

    export const textValidator = (text: string): boolean => {
        return (text.length >= 3) ? true : false;
    }
}

// Some samples to try
let strings = ['Hola', '28850', '101'];
// Validators to use
let validators: { [s: string]: Validation.StringValidator } = {};

validators['código postal'] = new Validation.ZipCodeValidator();

validators['sólo letras'] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log(
            `'${s}' - ${validators[name].isAcceptable(s) ? 'coincide con' : 'no coincide con'
            } ${name}`
        );
    }
}

console.log(Validation.textValidator('Gael'));


