/*
*Uso de los constructores privados en TypeScript
*/
{
    class User{
        static intance : User;
        private constructor(
            public name : string
        ){};
        static getUser(name : string = "Juan Pérez") : User{
            User.intance = new User(name);
            return User.intance;
        };
    };
    console.log(User.getUser());
}