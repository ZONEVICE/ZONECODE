(() => {

    class Person{

        static staticNumber = 99;

        static getAString(){
            return 'A';
        }

        constructor(
            public name: string,
            public birthYear: number
        ){ }
    }

    const person = new Person('VICE', 1234);
    
    console.log(person.name); // VICE
    console.log(Person.staticNumber); // 99
    console.log(Person.name); // Person. Since it's the name of the class.
    console.log(Person.getAString()); // A
})();