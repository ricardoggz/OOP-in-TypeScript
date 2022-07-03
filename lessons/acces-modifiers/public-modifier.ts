/**
 **modificador de acceso public: Este modificador nos permite
 **acceder a las propiedades de la clase(métodos, atributos, getters,
 **getters) dentro y fuera de la misma, es decir en clases hijas e instan-
 **ciando la clase.
*/
{
  class User {
    constructor(
      public name: string,
      public lastname: string,
      public isPremium?: boolean
    ){};
    public getfullName() : string{
      return `${this.name} ${this.lastname}`;
    };
  };
  /**
  **Instanciando la clase:*/
  let user =<User>new User("Ricardo", "Guevara");
  console.log(user.getfullName());
}