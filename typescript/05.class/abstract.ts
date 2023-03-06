(() => {

    abstract class Mutante {
        constructor(
            public name: string,
            public realname: string
        ) { }
    }

    class Xmen extends Mutante { 

        public SalvarMundo(): string{
            return "Mundo salvado"
        }

    }

    class Villano extends Mutante { 

        public ConquistarMundo(): string{
            return "Mundo conquistado"
        }

    }

    let wolverine: Xmen = new Xmen('Wolverine', 'Logan')
    let magneto: Villano = new Villano('Magneto', 'Magnus')

    const printName = (character: Mutante) => {
        console.log(character.realname)
    }

    console.log("1==================")
    console.log(wolverine, magneto)
    console.log(wolverine.SalvarMundo())
    console.log(magneto.ConquistarMundo())

    // Objecto que extiente de Mutante.
    printName(wolverine)
    console.log("1==================")

})();
