(() =>{

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    const flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Speed', 'Time Travel']
    }

    const superman: Hero = {
        name: 'Clark Kent',
        age: 500,
        powers: ['Super Strength', 'X-Ray Vision'],
        getName(){
            return this.name;
        }
    }

})();