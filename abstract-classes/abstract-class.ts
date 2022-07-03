/*
*clases abstractas en TypeScript.
*Con el uso de la palabra reservada abstract indicaré que mi clase
*será abstracta. Las clases abstractas nos sirven para crear nuevas
*clases que hereden los métodos y atributos, no podemos instanciar
*una clase abstracta.
*/
{
    abstract class Hero {
        constructor(
            public name : string,
            public power : string,
            public levelPower : number
        ){};
    };
    /*
    *Creando una clase que herede de Hero:
    */
   class Batman extends Hero {};
   /*
   *Instanciando la clase que hereda de Hero:
   */
   const BATMAN = <Batman>new Batman("Batman", "Speak", 70);
   console.log(BATMAN);
}