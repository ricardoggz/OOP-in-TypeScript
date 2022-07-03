{
    class Hero {
        constructor(name, power, levelPower) {
            this.name = name;
            this.power = power;
            this.levelPower = levelPower;
        }
        ;
    }
    ;
    class Batman extends Hero {
    }
    ;
    const BATMAN = new Batman("Batman", "Speak", 70);
    console.log(BATMAN);
}
//# sourceMappingURL=index.js.map