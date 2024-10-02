import './style.css'
import CabeceraPagina from './clases/CabeceraPagina'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Gestión de Cabecera de Página</h1>

    <form id="formCabecera">
      <section>
        <label>Título</label>
        <input type="text" id="titulo" name="titulo" placeholder="Ingresa el título" required>
      </section>

      <section>
        <label>Color de Fondo</label>
        <input type="color" id="color" name="color" value="#ffffff">
      </section>

      <section>
        <label>Fuente</label>
        <select id="fuente" name="fuente">
          <option value="Arial, sans-serif">Arial</option>
          <option value="'Times New Roman', serif">Times New Roman</option>
          <option value="'Courier New', monospace">Courier New</option>
          <option value="Georgia, serif">Georgia</option>
          <option value="Verdana, sans-serif">Verdana</option>
        </select>
      </section>

      <section>
        <label>Disposición</label>
        <select id="disposicion" name="disposicion">
          <option value="centrado">Centrado</option>
          <option value="derecha">Derecha</option>
          <option value="izquierda">Izquierda</option>
        </select>
      </section>

      <button type="submit">Generar Cabecera</button>
    </form>

    <div id="previewContainer" style="margin-top: 20px; border: 1px solid #ccc; padding: 10px;">
      <h2>Vista Previa:</h2>
      <div id="preview"></div>
    </div>
  </div>
`

const cabecera = new CabeceraPagina();

document.querySelector<HTMLFormElement>('#formCabecera')!.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const titulo = (document.querySelector<HTMLInputElement>('#titulo')!).value;
  const color = (document.querySelector<HTMLInputElement>('#color')!).value;
  const fuente = (document.querySelector<HTMLSelectElement>('#fuente')!).value;
  const disposicion = (document.querySelector<HTMLSelectElement>('#disposicion')!).value;

  cabecera.setProperties(titulo, color, fuente);
  cabecera.setDisposicion(disposicion);

  const previewElement = document.querySelector<HTMLDivElement>('#preview')!;
  previewElement.innerHTML = cabecera.generarHTML();
});
