(() => {

    interface Carro {
        llantas: number;
        modelo: string;
    }

    interface Volvo extends Carro {
        seguro: boolean;
    }

    var volvo: Volvo = {
        llantas: 4,
        modelo: "sedan",
        seguro: true

    }
    
})();