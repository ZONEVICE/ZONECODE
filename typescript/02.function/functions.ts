(() => {
    const hero: string = 'Flash';

    // Funtion returns string type.
    function returnName():string {
        return hero;
    }

    const activateBaisignal = ():string => {
        return 'Batiseñal activada';
    }

    console.log(typeof activateBaisignal);

    const heroName = returnName();
})();