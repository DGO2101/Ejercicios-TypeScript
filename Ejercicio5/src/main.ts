// src/main.ts
import './style.css'
import  Empleado  from './clases/Empleado'

// Crear una instancia de Empleado
const empleado = new Empleado(
    'Juan',
    'Pérez',
    'Av. Principal 123',
    '555-1234',
    25
);

// Cargar sueldo inicial
empleado.cargarSueldo(2500);

// Crear el HTML inicial
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <h1>Sistema de Empleados</h1>
    
    <div class="card">
      <h2>Datos del Empleado</h2>
      <div id="datos-empleado" class="empleado-info">
        <!-- Aquí se mostrarán los datos del empleado -->
      </div>
      
      <div class="controls">
        <div class="input-group">
          <label for="nuevo-sueldo">Nuevo Sueldo:</label>
          <input type="number" id="nuevo-sueldo" placeholder="Ingrese el nuevo sueldo">
        </div>
        <button id="actualizar-sueldo">Actualizar Sueldo</button>
        <button id="verificar-edad">Verificar Mayoría de Edad</button>
      </div>
    </div>
  </div>
`

// Función para mostrar los datos del empleado en el HTML
function mostrarDatosEnHTML() {
    const datosEmpleadoDiv = document.querySelector<HTMLDivElement>('#datos-empleado')!;
    
    // Capturar la salida de console.log
    let datosHTML = '';
    const originalLog = console.log;
    console.log = (mensaje) => {
        datosHTML += mensaje + '<br>';
    };

    // Llamar al método que muestra los datos
    empleado.mostrarDatosPersonales();

    // Restaurar console.log original
    console.log = originalLog;

    // Mostrar los datos en el div
    datosEmpleadoDiv.innerHTML = datosHTML;
}

// Agregar event listeners
document.querySelector('#actualizar-sueldo')?.addEventListener('click', () => {
    const nuevoSueldoInput = document.querySelector<HTMLInputElement>('#nuevo-sueldo')!;
    const nuevoSueldo = Number(nuevoSueldoInput.value);
    
    if (nuevoSueldo > 0) {
        empleado.cargarSueldo(nuevoSueldo);
        mostrarDatosEnHTML();
        nuevoSueldoInput.value = '';
    } else {
        alert('Por favor ingrese un sueldo válido');
    }
});

document.querySelector('#verificar-edad')?.addEventListener('click', () => {
    empleado.verificarMayoriaEdad();
});

// Mostrar datos iniciales
mostrarDatosEnHTML();
