// src/clases/Persona.ts
export default abstract class Persona {
    constructor(
        protected nombre: string,
        protected apellido: string,
        protected direccion: string,
        protected telefono: string,
        protected edad: number
    ) {}

    verificarMayoriaEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad`);
        } else {
            console.log(`${this.nombre} es menor de edad`);
        }
    }

    abstract mostrarDatosPersonales(): void;
}