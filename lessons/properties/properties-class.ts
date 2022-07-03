/*
*Propiedades de una clase. Una clase se constituye de atributos y métodos:
*Atributos : son las keys de los objetos que se construirán a partir de la
*clase.
*Métodos : son funciones que se encuentran dentro de las clases, las cuales
*nos auydarán a realizar cosas con los atributos.
*/
{
    class User{
        name : string; //Atributo
        lastname : string; //Atributo
        isPremium : boolean //atributo
        constructor(
            /*
            *Aquí haré uso de los atributos
            *que quiero que tengan mis objetos:
            */
           name : string,
           lastname : string,
           isPremium : boolean
        ){
            /*
            *Dentro del cuerpo del constructor llamaré
            *a los atributos con la palabra reservada 
            *this:
            */
           this.name = name;
           this.lastname = lastname;
           this.isPremium = isPremium;
        };
    };
    /*
    *instanciando la clase para crear un nuevo objeto:
    */
   let newUser : User = new User("Ricardo", "Guevara", true);
   console.log(newUser);
}
/*
*Ahora crearemos una clase con atributos y métodos:
*Haremos una forma rápida de declarar atributos sin 
*la necesidad de usar el this para apuntar a los 
*parámetros:
*/
{
    class Student {
        constructor(
            /*
            *Dentro del constructor haremos uso de los
            *modificadores de acceso para hacer uso de
            *los atributos sin el uso de this.
            */
           public name : string,
           public lastname : string,
           public id : number
        ){};
        /*
        *Ahora crearemos un método que me retorne todos
        *los datos de un estudiante:
        */
       getFullData() : string{
        return `Name : ${this.name} ${this.lastname} id : ${this.id}`;
       };
    };
    /*
    *Instanciando la clase:
    */
   let newStudent : Student = new Student("Ricardo", "Guevara", 18204126);
   /*
   *Accediendo al método del nuevo objeto:
   */
  console.log(newStudent.getFullData());
}