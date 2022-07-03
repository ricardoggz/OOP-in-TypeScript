/*
 *principio de herencia en TypeSript, haciendo uso de
 *super y extends:
 *extends : Es la palabra reservada que nos indica que
 *una clase hereda de otra.
 *super : Es la plabara reservada que nos sirve para llamar
 *métodos y atributos de la clase padre.
 */
{
  class Emploooye {
    constructor(
        public name: string,
        public salary: number
        ){};
  };

  /*
   *Creando una clase que herede de Emplooye:
   */
  class FullStackDev extends Emploooye {
    /*
     *Crearemos un constructor que recibirá los
     *mismos parámetros que la clase Emplooye y
     *haremos uso del super para indicarle que son
     *los mismos parámetros que la clase Emplooye.
     */
    constructor(name : string, salary: number){
      super(name, salary);
    };
  };
  /*
  *Instanciando la clase FullStackDev
  */
 let newFullsTackDev = <FullStackDev>new FullStackDev("Ricardo", 1500);
}
