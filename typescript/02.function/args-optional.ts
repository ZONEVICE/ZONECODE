(() => {
    const fullName = (firstName: string, lastName?: string):string => {
        // lastName is replaced with ---- if it is undefined.
        return `${firstName} ${lastName || '-----'}`;
    }

    // The last argument is optional.
    const name:string = fullName('Tony');
    const name2:string = fullName('Tony', 'Stark');

    console.log(name);
})();