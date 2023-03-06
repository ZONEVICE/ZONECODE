(() =>{
    const person: [string, number, boolean] = ["Juan", 30, true];

    person[0] = "Pedro";
    person[1] = 31;
    person[2] = false;

    // Error.
    // person[3] = "Juan";

    console.log(person);
})();