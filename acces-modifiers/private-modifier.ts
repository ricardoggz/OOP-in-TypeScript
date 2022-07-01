/**
 **modificador de acceso private: Este modificador nos permite
 **acceder a las propiedades de la clase(métodos, atributos, getters,
 **setters) solamente dentro de la misma.
*/
{
    class Person{
        constructor(
            private name : string,
            private lastname : string,
            private age : number
        ){};
        private getPersonInfo() : string{
            return `${this.name} ${this.lastname} your age is ${this.age}`;
        };
    };
    /*Instanciando la clase nos arrojará un error
      al momentos de querer acceder a las propiedades
      del objeto creado
    */
    let newPerson = <Person>new Person("Ricardo","Guevara",21);
    //console.log(newPerson.age); Error
}