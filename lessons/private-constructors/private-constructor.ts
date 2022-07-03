/*
*Uso de los constructores privados en TypeScript.
*Los constructores privados nos sirven para controlar
*la forma en la que nuestras clases son instanciadas.
*/
{
    class User{
        /*
        *Crearemos un atributo estático que será del 
        *tipo User, es el que utilizaremos para instanciar
        *la clase:
        */
        static intance : User;
        /*
        *Hacemos uso de la palabra reservada private
        *para indicar que el constructor será privado
        *y solamente puedo acceder a el dentro de mi
        *clase:
        */
        private constructor(
            public name : string
        ){};
        /*
        *Creando un método estático para instanciar mi clase:
        */
        static getUser(name : string = "Juan Pérez") : User{
            User.intance = new User(name);
            return User.intance;
        };
    };
    /*
    *Accediendo al método estático para instanciar la clase:
    */
    console.log(User.getUser());
}