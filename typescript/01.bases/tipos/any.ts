(() =>{
    let x: any = "abc";
    // Won't show an error
    x = "123";
    // Casts x to a String without changing it's type.
    console.log((x as string).charAt(1)); // => b
    x = 456;
    // Casts x to a Number without changing it's type.
    console.log(<number>x.toFixed(2)); // => 456.00
})();