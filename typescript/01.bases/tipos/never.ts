(() => {
    // Never es un tipo que nunca se cumple.
    // Termina la ejecución del programa con un error.
    const error = (message:string):(never|number) =>{
        if (false)
            throw new Error(message); // Ends execution if reached.

        return 1;
    }

    error('Error!');
    console.log('Hello World');
})();