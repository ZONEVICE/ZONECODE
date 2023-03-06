(() => {

    type Avenger = {
        name: string;
        weapon: string
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Mark 50'
    }

    const capAmerica: Avenger = {
        name: 'Capitan America',
        weapon: 'Shielf'
    }

    const Thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ironman, capAmerica, Thor];

    for (const avenger of avengers) {
        console.log(avenger);
    }

})();