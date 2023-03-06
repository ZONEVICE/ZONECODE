(() => {

    const fullName = (firstName: string, ...restOfArguments: string[]): string => {
        return `${firstName} ${restOfArguments.join(' ')}`;
    }

    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman); // Clark Joseph Kent

    const batman = fullName('Bruce', 'Wayne', "Alfred", "Gordon", "Carmine", "Falcone");
    console.log({ batman }); // { batman: 'Bruce Wayne Alfred Gordon Carmine Falcone' }

    // const IronMan = fullName('Tony', 'Stark', 5); // Error because 5 is not a string.

})();