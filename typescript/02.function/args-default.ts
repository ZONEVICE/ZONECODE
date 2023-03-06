(() => {
    const fullName =
        (
            firstName: string,
            lastName?: string,
            upper: boolean = false
        ): string => {
            const ret = `${firstName} ${lastName || '---'}`;
            return upper ? ret.toUpperCase() : ret;
        }

    const name: string = fullName('Tony', 'Stark');
    console.log({ name }); // { name: 'Tony Stark' }

    const name2: string = fullName('Bruce', 'Wayne', true);
    console.log({ name2 }); // { name2: 'BRUCE WAYNE' }
})();