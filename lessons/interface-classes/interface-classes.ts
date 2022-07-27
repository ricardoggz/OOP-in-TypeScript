/*
*Interfaces de TypeScript dentro de las clases:
*Para implementar una interface dentro de una clase
*debemos hacer uso de la palabra reservada implements:
*/
{
    interface Character{
        name : string;
        powers : string[];
        owner : string;
    };

    /*
    *Implementaremos la interface Hero
    */
    class Evil implements Character{
        name : string;
        powers : string[];
        owner : string;
        constructor(name : string, powers : string[], owner : string){
            this.name = name;
            this.powers = powers;
            this.owner = owner;
        };
    };
    const lexLuthor : Evil = new Evil("DearDevil", ["Malvado"], "Marvel");
    console.log(lexLuthor);
}