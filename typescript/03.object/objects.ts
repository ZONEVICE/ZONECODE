(() =>{

    let flash: { name: string, age? : number, powers: string[], getName?: () => string } = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed", "Time Travel", "Dimensional Travel"]
    }

    flash = {
        name: "Clark Kent",
        powers: ["Super Strength"],
        getName(){
            return this.name;
        }
    }

})();