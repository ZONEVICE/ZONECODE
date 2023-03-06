(() => {

    // Interfaces and types are almost the same
    // according from official TypeScript documentation.

    interface Hero {
        name: string;
        age?: number;
        powers: string[];
        GetName?: () => string;
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
        GetName() {
            return this.name;
        }
    }

})();