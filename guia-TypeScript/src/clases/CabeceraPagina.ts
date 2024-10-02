class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private disposicion: string;
  
    constructor() {
      this.titulo = '';
      this.color = '';
      this.fuente = '';
      this.disposicion = '';
    }
  
    setProperties(titulo: string, color: string, fuente: string): void {
      this.titulo = titulo;
      this.color = color;
      this.fuente = fuente;
    }
  
    setDisposicion(disposicion: string): void {
      if (['centrado', 'derecha', 'izquierda'].includes(disposicion.toLowerCase())) {
        this.disposicion = disposicion.toLowerCase();
      } else {
        console.error('Disposición no válida. Use: centrado, derecha o izquierda');
        this.disposicion = 'centrado'; // valor por defecto
      }
    }
  
    generarHTML(): string {
      const alineacion = {
        'centrado': 'center',
        'derecha': 'right',
        'izquierda': 'left'
      }[this.disposicion] || 'center';
  
      return `
        <div style="background-color: ${this.color}; padding: 20px; text-align: ${alineacion};">
          <h1 style="font-family: ${this.fuente}; margin: 0;">${this.titulo}</h1>
        </div>
      `;
    }
  }
  
  export default CabeceraPagina;