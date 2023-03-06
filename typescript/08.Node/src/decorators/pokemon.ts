function printToConsole(constructor: Function): any {
    console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false): Function => {
    if (print) {
        return printToConsole
    } else {
        return () => { }
    }
}

const BlockPrototipe = function (constructor: Function): any {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

function CheckValidPokemonID(): Function {
    return function (
        target: any,
        propertyKey: string,
        descriptior: PropertyDescriptor
    ) {
        const OriginalMethod = descriptior.value
        descriptior.value = (id: number) => {
            if (id < 1 || id > 800){
                return console.error('Not valid ID. Must be between 1 and 800.')
            } else {
                return OriginalMethod(id)
            }
        }
    }
}

function ReadOnly(isWritable: boolean = true): Function {
    return function (
        target: any,
        propertyKey: string,
        descriptior: PropertyDescriptor
    ) { 
        const descriptor: PropertyDescriptor = {
            get () {

            },
            set () {
                
            }
        }

        return descriptor
    }
}

@BlockPrototipe
@printToConsoleConditional(false)
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co'

    constructor(
        public name: string
    ) { }

    @CheckValidPokemonID()
    SavePokemonToDB(id: number): void {
        console.log(`Pokemon saved into DB with ID: ${id}`)
    }
}