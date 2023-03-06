(() =>{

    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: (name: string) => string;
    }

    // Initiates as String.
    let myCustomVariable: (string | number | Hero) = 'Clark';
    console.log(myCustomVariable); // Clark

    myCustomVariable = 20;
    console.log(typeof myCustomVariable); // number

    myCustomVariable = {
        name: 'Clark Kent',
        age: 500,
        powers: [1],
        getName(name){
            return name;
        }
    }

})();