(() => {

    class Person {
        constructor(
            private name: string,
            private id: string
        ) { }

        get Name(): string {
            return this.name;
        }

        set Name(name: string){
            this.name = name;
        }

        get ID(): string{
            return this.id;
        }

        set ID(id: string){
            this.id = id;
        }
    }

    const p = new Person('VICE', '1me3iie');

    console.log('======= GET SET =======');

    console.log(p.Name);
    console.log(p.ID);

    p.Name = 'Thomas';
    console.log(p.Name);

    console.log('======= GET SET =======');

})();