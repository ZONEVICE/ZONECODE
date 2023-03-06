(() =>{

    const addNumbers = (a:number, b:number):number => a + b;
    const greet = (name:string):string => `Hola ${name}`;
    const saveTheWorld = ():string => `El mundo esta salvado`;

    // Variables type function.
    const func1: (a:number, b:number) => number = addNumbers;
    const func2: (name:string) => string = greet;
    const func3: () => string = saveTheWorld;

    // Another way to create a function type and assign it's value.
    let func4: (a:number, b:number) => number;
    func4 = addNumbers;

})();