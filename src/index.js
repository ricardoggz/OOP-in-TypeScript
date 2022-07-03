{
    class User {
        constructor(name, lastname, isPremium) {
            this.name = name;
            this.lastname = lastname;
            this.isPremium = isPremium;
        }
        ;
    }
    ;
    let newUser = new User("Ricardo", "Guevara", true);
    console.log(newUser);
}
{
    class Student {
        constructor(name, lastname, id) {
            this.name = name;
            this.lastname = lastname;
            this.id = id;
        }
        ;
        getFullData() {
            return `Name : ${this.name} ${this.lastname} id : ${this.id}`;
        }
        ;
    }
    ;
    let newStudent = new Student("Ricardo", "Guevara", 18204126);
    console.log(newStudent.getFullData());
}
//# sourceMappingURL=index.js.map