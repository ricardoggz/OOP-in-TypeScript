{
    class User {
        constructor(name) {
            this.name = name;
        }
        ;
        static getUser(name = "Juan Pérez") {
            User.intance = new User(name);
            return User.intance;
        }
        ;
    }
    ;
    console.log(User.getUser());
}
//# sourceMappingURL=index.js.map