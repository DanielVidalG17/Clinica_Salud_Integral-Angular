import { Component, signal } from '@angular/core';
import { Encabezado } from './componentes/encabezado/encabezado';
import { BarraNavegacion } from './componentes/barra-navegacion/barra-navegacion';
import { Carrusel } from './componentes/carrusel/carrusel';
import { Medicos } from './componentes/medicos/medicos';
import { Registro } from './componentes/registro/registro';
import { Footer } from './componentes/footer/footer';

@Component({
  standalone: true,
  imports: [Encabezado, BarraNavegacion, Carrusel, Medicos, Registro, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('clinica-salud-integral');
}
