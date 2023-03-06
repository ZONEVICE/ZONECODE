(() => {

    class Apocalipsis {

        static instance: Apocalipsis | null = null

        private constructor(public name: string) { }

        static LlamarApocalipsis(): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis. El único.')
            }
            return Apocalipsis.instance
        }

        public CambiarNombre(name: string): void {
            this.name = name
        }
    }

    const apocalipsis = Apocalipsis.LlamarApocalipsis();
    const apocalipsis2 = Apocalipsis.LlamarApocalipsis();
    const apocalipsis3 = Apocalipsis.LlamarApocalipsis();

    console.log("2========================")
    console.log(apocalipsis, apocalipsis2, apocalipsis3)
    console.log("2========================")

    apocalipsis2.CambiarNombre("Xavier")

    console.log("3========================")
    console.log(apocalipsis, apocalipsis2, apocalipsis3)
    console.log("3========================")

    /* const apocalipsis = new Apocalipsis('Soy Apocalipsis. El único.')
    const apocalipsis2 = new Apocalipsis('Soy Apocalipsis 2. El único.')
    const apocalipsis3 = new Apocalipsis('Soy Apocalipsis 3. El único.')

    console.log("2========================")
    console.log(apocalipsis, apocalipsis2, apocalipsis3)
    console.log("2========================") */

})();