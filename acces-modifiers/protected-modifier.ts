/**
 **modificador de acceso protected: Este modificador nos permite
 **acceder a las propiedades de la clase(métodos, atributos, getters,
 **setters) y a las propiedades hijas, fuera de estas no podemos acceder
 **a dichas propiedades.
*/
{
    class User {
        constructor(
            protected name: string,
            protected lastname : string,
            protected payNumber : number
        ){};
        private getNumberMethod() : number {
            return this.payNumber;
        };
    };

    /**
     **Creando una clase que herede de User:*/
    class UserPremium extends User{
        constructor(
            name : string,
            lastname : string,
            payNumber : number
        ){
            super(name,lastname,payNumber);
        };
    };
    let newUserPremium = <UserPremium>new UserPremium("Ricardo", "Guevara", 18204126);
    //console.log(newUserPremium.getNumberMethod()) Error
    
}