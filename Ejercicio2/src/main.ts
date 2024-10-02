import './style.css'
import './style.css'
import Calculadora from './clases/Calculadora'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Calculadora</h1>
    <form id="formCalculadora">
      <section>
        <label for="num1">Número 1:</label>
        <input type="number" id="num1" required>
      </section>
      <section>
        <label for="num2">Número 2:</label>
        <input type="number" id="num2" required>
      </section>
      <section>
        <label for="operacion">Operación:</label>
        <select id="operacion">
          <option value="sumar">Sumar</option>
          <option value="restar">Restar</option>
          <option value="multiplicar">Multiplicar</option>
          <option value="dividir">Dividir</option>
          <option value="potencia">Potencia</option>
          <option value="factorial">Factorial (solo usa Número 1)</option>
        </select>
      </section>
      <button type="submit">Calcular</button>
    </form>
    <div id="resultado"></div>
  </div>
`

const calculadora = new Calculadora();

document.querySelector<HTMLFormElement>('#formCalculadora')!.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const num1 = parseFloat((document.querySelector<HTMLInputElement>('#num1')!).value);
  const num2 = parseFloat((document.querySelector<HTMLInputElement>('#num2')!).value);
  const operacion = (document.querySelector<HTMLSelectElement>('#operacion')!).value;
  
  let resultado: number;

  try {
    switch (operacion) {
      case 'sumar':
        resultado = calculadora.sumar(num1, num2);
        break;
      case 'restar':
        resultado = calculadora.restar(num1, num2);
        break;
      case 'multiplicar':
        resultado = calculadora.multiplicar(num1, num2);
        break;
      case 'dividir':
        resultado = calculadora.dividir(num1, num2);
        break;
      case 'potencia':
        resultado = calculadora.potencia(num1, num2);
        break;
      case 'factorial':
        resultado = calculadora.factorial(num1);
        break;
      default:
        throw new Error('Operación no válida');
    }

    const resultadoElement = document.querySelector<HTMLDivElement>('#resultado')!;
    resultadoElement.textContent = `Resultado: ${resultado}`;
  } catch (error) {
    if (error instanceof Error) {
      const resultadoElement = document.querySelector<HTMLDivElement>('#resultado')!;
      resultadoElement.textContent = `Error: ${error.message}`;
    }
  }
});
