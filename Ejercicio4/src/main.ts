import './style.css'
import Cuenta from './clases/Cuenta'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Gestión de Cuenta Bancaria</h1>

    <form id="crearCuenta">
      <section>
        <label>Nombre</label>
        <input type="text" id="nombre" name="nombre" placeholder="Ingresa el nombre" required>
      </section>

      <section>
        <label>Cantidad Inicial</label>
        <input type="number" id="cantidad" name="cantidad" placeholder="Ingresa la cantidad inicial" required>
      </section>

      <section>
        <label>Tipo de Cuenta</label>
        <select id="tipoCuenta" name="tipoCuenta">
          <option value="Ahorro">Ahorro</option>
          <option value="Corriente">Corriente</option>
        </select>
      </section>

      <section>
        <label>Número de Cuenta</label>
        <input type="text" id="numeroCuenta" name="numeroCuenta" placeholder="Ingresa el número de cuenta" required>
      </section>

      <button type="submit">Crear Cuenta</button>
    </form>

    <div id="operaciones" style="display: none;">
      <form id="depositar">
        <h2>Depositar</h2>
        <input type="number" id="montoDeposito" placeholder="Monto a depositar" required>
        <button type="submit">Depositar</button>
      </form>

      <form id="retirar">
        <h2>Retirar</h2>
        <input type="number" id="montoRetiro" placeholder="Monto a retirar" required>
        <button type="submit">Retirar</button>
      </form>

      <button id="mostrarDatos">Mostrar Datos de la Cuenta</button>
    </div>

    <div id="resultado"></div>
  </div>
`

let cuenta: Cuenta | null = null;

document.querySelector<HTMLFormElement>('#crearCuenta')!.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const nombre = (document.querySelector<HTMLInputElement>('#nombre')!).value;
  const cantidad = parseFloat((document.querySelector<HTMLInputElement>('#cantidad')!).value);
  const tipoCuenta = (document.querySelector<HTMLSelectElement>('#tipoCuenta')!).value;
  const numeroCuenta = (document.querySelector<HTMLInputElement>('#numeroCuenta')!).value;

  cuenta = new Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta);
  
  const operacionesElement = document.querySelector<HTMLDivElement>('#operaciones');
  if (operacionesElement) operacionesElement.style.display = 'block';
  
  mostrarResultado('Cuenta creada exitosamente');
});

document.querySelector<HTMLFormElement>('#depositar')!.addEventListener('submit', (e) => {
  e.preventDefault();
  if (cuenta) {
    const monto = parseFloat((document.querySelector<HTMLInputElement>('#montoDeposito')!).value);
    mostrarResultado(cuenta.depositar(monto));
  }
});

document.querySelector<HTMLFormElement>('#retirar')!.addEventListener('submit', (e) => {
  e.preventDefault();
  if (cuenta) {
    const monto = parseFloat((document.querySelector<HTMLInputElement>('#montoRetiro')!).value);
    mostrarResultado(cuenta.retirar(monto));
  }
});

document.querySelector<HTMLButtonElement>('#mostrarDatos')!.addEventListener('click', () => {
  if (cuenta) {
    mostrarResultado(cuenta.mostrarDatos());
  }
});

function mostrarResultado(mensaje: string) {
  const resultadoElement = document.querySelector<HTMLDivElement>('#resultado');
  if (resultadoElement) resultadoElement.innerHTML = mensaje;
}



