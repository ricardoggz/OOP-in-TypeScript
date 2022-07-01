/**
 **modificador de acceso static: Este modificador nos permite
 **agregar valores estáticos a los atributos ya los métodos, los cuales
 **Podemos acceder a ellos solo llamando la clase sin necesidad de crear
 **una nueva instancia.
 */
{
  class User {
    static firstName : string = "Ricardo";
    static lastname : string = "Guevara";
    static age : number;
    static getFullName() : string{
        return `${this.firstName} ${this.lastname}`
    }
  };
  /*
   *Acceciendo a los atributos y métodos de la clase sin instanciarla:
   *Como si accediera a las propiedades de un objeto literal.
  */
 console.log(User.age = 21);
 console.log(User.getFullName());
}
