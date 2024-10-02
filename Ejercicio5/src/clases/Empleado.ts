// src/clases/Empleado.ts
import  Persona  from './Persona';

export default class Empleado extends Persona {
    private sueldo: number = 0;

    constructor(
        nombre: string,
        apellido: string,
        direccion: string,
        telefono: string,
        edad: number
    ) {
        super(nombre, apellido, direccion, telefono, edad);
    }

    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    imprimirSueldo(): void {
        console.log(`Sueldo: $${this.sueldo}`);
    }

    mostrarDatosPersonales(): void {
        console.log('Datos del Empleado:');
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
        this.imprimirSueldo();
    }
}