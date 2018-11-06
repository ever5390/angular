 export class Empleado {

    // 1ERA FORMA - NORMAL - CLÁSICA
    // public nombre;
    // public edad;
    // constructor(nombre, edad){
    //     this.nombre = nombre;
    //     this.edad = edad;
    // }

    // 2DA FORMA AHORRO DE CÓDIGO
    // ************************* */

    constructor(
        public nombre: string,
        public edad: number,
        public cargo: string,
        public contratado: boolean
    ) {}

}
