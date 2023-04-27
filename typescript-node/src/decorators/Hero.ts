function printToConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
    if (print) {
        return printToConsole;
    } else {
        return () => { }
    }
}

const blockPrototype = function (constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function CheckValidHeroId() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error('El id del héroe no es válido.');
            } else {
                return originalMethod(id);
            }
        }
    }
}

function readOnly(isWritable: boolean = true): Function {
    return function (target: any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this);
                return 'Hero';
            },
            set(this, val) {
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor;
    }
}

@blockPrototype
@printToConsoleConditional()
export class Hero {
    @readOnly()
    public api: string = 'https://developer.marvel.com/'
    constructor(
        public name: string
    ) { }

    @CheckValidHeroId()
    saveHero(id: number) {
        console.log(`Héroe guardado en base de datos con id ${id}`);
    }
}