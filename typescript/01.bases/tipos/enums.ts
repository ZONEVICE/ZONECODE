(() => {
    enum Tipo {
        A = 1,
        B = 2,
        C = 3
    }
    let tipo: Tipo = Tipo.A;
    console.log(tipo); // 1
    console.log(typeof Tipo[Tipo.A]); // A
    console.log(Tipo[Tipo.A]); // string
})();
