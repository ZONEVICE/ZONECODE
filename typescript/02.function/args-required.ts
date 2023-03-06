(() => {
    const fullName = (firstName: string, lastName: string) => {
        return `${firstName} ${lastName}`;
    }
    // Required arguments. Must be string and string types.
    const name = fullName('Tony', 'Stark');

    console.log(name);
})();