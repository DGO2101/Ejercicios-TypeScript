export default class Cuenta {
    constructor(
        public nombre: string,
        private cantidad: number,
        public tipoCuenta: string,
        public numeroCuenta: string
    ) {}

    depositar(monto: number): void {
        if (monto < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else {
            this.cantidad += monto;
            console.log(`Se ha depositado correctamente $${monto.toFixed(2)}`);
        }
    }

    retirar(valor: number): void {
        if (this.cantidad < 5) {
            console.log("No hay suficiente efectivo en la cuenta.");
        } else if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        } else if (valor > this.cantidad) {
            console.log("No hay suficiente saldo para realizar este retiro.");
        } else {
            this.cantidad -= valor;
            console.log(`Ha retirado $${valor.toFixed(2)}. Su nuevo saldo es $${this.cantidad.toFixed(2)}`);
        }
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
        console.log(`Número de cuenta: ${this.numeroCuenta}`);
    }
}

// Ejemplo de uso
const miCuenta = new Cuenta("Juan Pérez", 100, "Ahorro", "123456789");

console.log("Datos de la cuenta:");
miCuenta.mostrarDatos();

console.log("\nIntentando depositar $3:");
miCuenta.depositar(3);

console.log("\nDepositando $50:");
miCuenta.depositar(50);

console.log("\nIntentando retirar $3:");
miCuenta.retirar(3);

console.log("\nRetirando $30:");
miCuenta.retirar(30);

console.log("\nIntentando retirar $200:");
miCuenta.retirar(200);