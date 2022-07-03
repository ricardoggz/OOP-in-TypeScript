{
  class Student {
    constructor(
      public _name: string,
      public _lastname: string,
      public _id: number
    ) {};
    get id() {
      /*
      *Al usar un get es necesario
      *utilizar un return y nunca
      *va a recibir un parámetro.
      */
      return this._id;
    };
    set id(studentId: number) {
      /*
      *Al usar un set es necesario
      *no utilizar un return y recibir
      *solo un parametro obligatorio.
      */
      this._id = studentId;
    };
  }

  let newStudent = new Student("Ricardo", "guevara", 18204126);
  /*
  *Para utilizar el get, es necesario
  *llamarlo sin el uso de paréntesis,
  *como si se ejecutara una función
  */
  console.log(newStudent.id);

  /*
  *Para utilizar el set, es necesario
  *llamarlo y agregarle un valor:
  */
  console.log(newStudent._id = 123456);
  /*
  *Con el set podemos cambiar el valor
  *de lo que retorna el get.
  */
}
