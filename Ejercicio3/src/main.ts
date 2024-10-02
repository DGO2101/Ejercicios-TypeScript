import './style.css'

class Canción {
    private _autor: string;

    constructor(public título: string, public género: string) {
        this._autor = "";
    }

    get autor(): string {
        return this._autor;
    }

    set autor(nuevoAutor: string) {
        this._autor = nuevoAutor;
    }

    mostrarDatos(): string {
        return `Título: ${this.título}\nGénero: ${this.género}\nAutor: ${this._autor}`;
    }
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Gestor de Canciones</h1>
    <form id="formCancion">
      <section>
        <label for="titulo">Título:</label>
        <input type="text" id="titulo" required>
      </section>
      <section>
        <label for="genero">Género:</label>
        <input type="text" id="genero" required>
      </section>
      <section>
        <label for="autor">Autor:</label>
        <input type="text" id="autor" required>
      </section>
      <button type="submit">Crear Canción</button>
    </form>
    <div id="resultado"></div>
  </div>
`

document.querySelector<HTMLFormElement>('#formCancion')!.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const titulo = (document.querySelector<HTMLInputElement>('#titulo')!).value;
  const genero = (document.querySelector<HTMLInputElement>('#genero')!).value;
  const autor = (document.querySelector<HTMLInputElement>('#autor')!).value;
  
  const cancion = new Canción(titulo, genero);
  cancion.autor = autor;

  const resultadoElement = document.querySelector<HTMLDivElement>('#resultado')!;
  resultadoElement.innerHTML = cancion.mostrarDatos().replace(/\n/g, '<br>');

  // Limpiar el formulario
  (document.querySelector<HTMLFormElement>('#formCancion')!).reset();
});
