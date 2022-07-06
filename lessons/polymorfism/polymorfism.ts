/*
*Principio del polimorfismo en TypeScript
*/
{
    /*
    *Creando nuestra clase base:
    */
    class Car{
        constructor(
            public name : string,
            public year : number
        ){};
    };
    /*
    *Creando clases que heredan de la clase base:
    */
    class Ferrari extends Car{};
    class Mustang extends Car{};
    /*
    *Instanciando las clases:
    */
   let ferrari : Ferrari = new Ferrari("ferrari", 1989);
   let mustang : Mustang = new Mustang("Mustang", 2006);
   /*
   *Utilizaremos la clase base para acceder a los
   *atributos que esta contiene:
   */
  function getCarName(car : Car) : string{
    return car.name;
  };
  console.log(getCarName(ferrari));
  console.log(getCarName(mustang));
}