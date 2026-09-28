import { Component } from '@angular/core';

interface Especialidad {
  id: string;
  nombre: string;
  descripcion: string;
}

interface Medico {
  id: number;
  nombre: string;
  especialidad: string;
  motivacion: string;
  imagen: string;
}

@Component({
  standalone: true,
  imports: [],
  selector: 'app-medicos',
  styleUrl: './medicos.css',
  templateUrl: './medicos.html',
})

export class Medicos {
  especialidades: Especialidad[] = [

    {
      id: 'terapia-neural',
      nombre: 'Terapia neural',
      descripcion: 'Especialidad orientada al tratamiento integral mediante técnicas que buscan favorecer el equilibrio y bienestar del organismo.'
    },

    {
      id: 'quiropraxia',
      nombre: 'Quiropraxia',
      descripcion: 'Especialidad enfocada en el cuidado del sistema musculoesquelético y en el bienestar relacionado con la movilidad corporal.'
    },

    {
      id: 'fisioterapia',
      nombre: 'Fisioterapia',
      descripcion: 'Área dedicada a la recuperación y mantenimiento del movimiento y la funcionalidad física mediante tratamientos personalizados.'
    },

    {
      id: 'nutricion',
      nombre: 'Nutrición y Dietética Terapéutica',
      descripcion: 'Especialidad que busca promover hábitos alimentarios saludables mediante orientación nutricional adaptada a las necesidades de cada paciente.'
    },

    {
      id: 'psicologia',
      nombre: 'Psicología (Disponible muy pronto)',
      descripcion: 'Especialidad orientada al bienestar emocional y al acompañamiento de las personas en el manejo de diferentes situaciones de su vida, muy pronto se abriran las citas de psicologia.'
    }

  ];


  medicos: Medico[] = [

    {
      id: 1,
      nombre: 'Dra. Laura Martínez',
      especialidad: 'Terapia neural',
      motivacion: 'Especialista en terapias integrales para mejorar el bienestar y la calidad de vida de sus pacientes.',
      imagen: 'img/imagen_mujer_2.jpg'
    },

    {
      id: 2,
      nombre: 'Dr. Carlos Rodríguez',
      especialidad: 'Quiropraxia',
      motivacion: 'Enfocado en el tratamiento y prevención de alteraciones musculoesqueléticas.',
      imagen: 'img/imagen_hombre_2.jpg'
    },

    {
      id: 3,
      nombre: 'Dra. María González',
      especialidad: 'Fisioterapia',
      motivacion: 'Comprometida con la recuperación funcional y el acompañamiento personalizado.',
      imagen: 'img/imagen_mujer_1.jpg'
    },

    {
      id: 4,
      nombre: 'Dr. Andrés López',
      especialidad: 'Nutrición y Dietética Terapéutica',
      motivacion: 'Promueve hábitos saludables mediante planes nutricionales adaptados a cada paciente.',
      imagen: 'img/imagen_hombre_1.jpg'
    }

  ];


  especialidadSeleccionada = this.especialidades[0];


  seleccionarEspecialidad(especialidad: Especialidad): void {

    this.especialidadSeleccionada = especialidad;

  }
}
