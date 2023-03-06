"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["debil"] = 0] = "debil";
        Fuerza[Fuerza["promedio"] = 1] = "promedio";
        Fuerza[Fuerza["fuerte"] = 5] = "fuerte";
        Fuerza[Fuerza["super"] = 100] = "super";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = Fuerza.fuerte;
    const fuerzaSuperman = Fuerza.super;
    const fuerzaBatman = Fuerza.promedio;
    const fuerzaAcuaman = Fuerza.debil;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=examen-1.js.map