(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        active: boolean;
        power: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        active: true,
        power: 1500.128372
    }

    const extraer = ({ ironman, ...resto }: Avengers): void => {
        console.log(ironman);
        console.log(resto);
    }

    extraer(avengers);

    const avengersArr: [string, boolean, number] = ['Thor', true, 1500.128372];
    const [nombre, active, power] = avengersArr;
    console.log(nombre, active, power);

})();