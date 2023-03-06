// Crear interfaces

interface IPerson {
  name: string;
  age: number;
  address: IAddress;
}

interface IAddress {
  city: string;
  country: string;
}

const person: IPerson = {
  name: 'Duddley',
  age: 60,
  address: {
    city: 'Sim City',
    country: 'USA'
  }
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface IAuto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

const conducirBatimovil = (auto: IAuto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: IAuto = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

const guason = {
  reir: true,
  comer: true,
  llorar: false
}

const reir = (guason): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

const ciudadGotica = (ciudadanos: string[]): number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
interface IPersona {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}


class Persona implements IPersona { 
  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: string;
  public imprimirBio() {
    // console.log(bla)
  }
}