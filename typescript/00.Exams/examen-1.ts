(() => {

  // Tipos
  const batman: string = 'Bruce';
  const superman: string = 'Clark';

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ['Lex Lutor', 5, true];

  // Arreglos
  const aliados:string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

  //Enumeraciones
  enum Fuerza{
    debil = 0,
    promedio = 1,
    fuerte = 5,
    super = 100
  }
  const fuerzaFlash:Fuerza = Fuerza.fuerte;
  const fuerzaSuperman:Fuerza = Fuerza.super;
  const fuerzaBatman:Fuerza = Fuerza.promedio;
  const fuerzaAcuaman:Fuerza = Fuerza.debil;

  // Retorno de funciones
  function activar_batiseñal():string {
    return 'activada';
  }

  function pedir_ayuda():void {
    console.log('Auxilio!!!');
  }

  // Aserciones de Tipo
  const poder: any = '100';
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);


})()

