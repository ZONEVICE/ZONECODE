(() => {

    // C# & Java style.
    /*     
    class Avenger {
        private name: string;
        private team: string;
        public realName?: string;
        static avgAge: number = 35;

        constructor(name: string, team: string, realName?: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    } 
    */

    class Avenger {
        static avgAge: number = 35;

        constructor(
            private name: string, 
            private team: string, 
            public realName?: string
        ) { }

        public bio(): string {
            return `${this.name} (${this.team})`;
        }

        // Cannot be accessed from the outside of
        // this class.
        private foo(){
            console.log('foo');
        }

        public bar(){
            this.foo();
        }
    }

    const antman = new Avenger("Ant Man", "Cap");
    console.log(antman);
    console.log(antman.bio());

})();