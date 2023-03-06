(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('Avenger contructor called.');
        }

        // Protected functions can be accessed from
        // classes that extends from this class and
        // itself (like private).
        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }

        public getFullNameFromAvenger() {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {

        constructor(
            name: string, // Variable to pass to super.
            realName: string, // Variable to pass to super.
            public isMutant: boolean
        ) {
            super(name, realName);
            console.log('Xmen constructor called.');
        }

        getFullNameFromXmen() {
            super.getFullName();
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(`Full name from Avenger: ${wolverine.getFullNameFromAvenger()}`);
    console.log(`Full name from Xmen: ${wolverine.getFullNameFromXmen()}`);
    console.log(`Is ${wolverine.name} a mutant: ${wolverine.isMutant}`);
    
})();