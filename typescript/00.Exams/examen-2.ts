// Funciones Básicas
function sumar(a: number, b: number): number {
  return a + b;
}

const contar = (heroes: string[]) => {
  return heroes.length;
}
const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman: (a?: boolean) => void = (llamar: boolean = true) => {
  if (llamar) {
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
const unirheroes: (...a: string[]) => string = (...personas: string[]) => {
  return personas.join(", ");
}


// Tipo funcion
const noHaceNada: (a: number, b: string, c: boolean, d: string[]) => void = (numero, texto, booleano, arreglo) => { }

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (a: number, b: string, c: boolean, d: string[]) => void;
noHaceNadaTampoco = noHaceNada
