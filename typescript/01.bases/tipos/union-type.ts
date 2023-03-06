(() => {

    // Union type is a type that can be one of the types in the union.

    let foo:(boolean|string|number) = "1";
    foo = 1;
    foo = true;

})();