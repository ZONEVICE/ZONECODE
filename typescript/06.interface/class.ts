(() => {

    interface IMutant {
        name: string;
        realName: string;
        MutantPower(id: number): string;
    }

    interface IHuman {
        age: number
    }

    class Xmen implements IMutant, IHuman {
        // IHuman entities.
        public age: number = -1;
        // IMutant entities.
        public name: string = '';
        public realName: string = '';

        MutantPower(){
            return this.name + ' ' + this.realName;
        }
    }

})();
