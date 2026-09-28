import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-registro',
  styleUrl: './registro.css',
  templateUrl: './registro.html',
})
export class Registro {

  nombres = '';
  apellidos = '';
  documento = '';
  celular = '';
  correo = '';
  genero = '';
  contrasena = '';
  confirmarContrasena = '';
  terminos = false;

  errorNombres = '';
  errorApellidos = '';
  errorDocumento = '';
  errorCelular = '';
  errorCorreo = '';
  errorGenero = '';
  errorContrasena = '';
  errorConfirmarContrasena = '';
  errorTerminos = '';


  validarCampoObligatorio(
    valor: string,
    campo: string
  ): boolean {

    if (valor.trim() === '') {

      switch (campo) {

        case 'nombres':
          this.errorNombres = 'Este campo es obligatorio.';
          break;

        case 'apellidos':
          this.errorApellidos = 'Este campo es obligatorio.';
          break;

        case 'documento':
          this.errorDocumento = 'Este campo es obligatorio.';
          break;

        case 'celular':
          this.errorCelular = 'Este campo es obligatorio.';
          break;

        case 'contrasena':
          this.errorContrasena = 'Este campo es obligatorio.';
          break;

      }

      return false;
    }

    if (
      (campo === 'nombres' || campo === 'apellidos') &&
      !/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(valor.trim())
    ) {
      const mensaje = 'Solo se permite escribir letras.';

      if (campo === 'nombres') {
        this.errorNombres = mensaje;
      } else {
        this.errorApellidos = mensaje;
      }

      return false;
    }

    if (
      (campo === 'documento' || campo === 'celular') &&
      !/^\d+$/.test(valor.trim())
    ) {
      const mensaje = 'Solo se permite escribir números.';

      if (campo === 'documento') {
        this.errorDocumento = mensaje;
      } else {
        this.errorCelular = mensaje;
      }

      return false;
    }

    switch (campo) {

      case 'nombres':
        this.errorNombres = '';
        break;

      case 'apellidos':
        this.errorApellidos = '';
        break;

      case 'documento':
        this.errorDocumento = '';
        break;

      case 'celular':
        this.errorCelular = '';
        break;

      case 'contrasena':
        this.errorContrasena = '';
        break;

    }

    return true;
  }

  validarCorreo(): boolean {

    if (this.correo.trim() === '') {

      this.errorCorreo = 'Este campo es obligatorio.';

      return false;
    }

    const expresionCorreo =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionCorreo.test(this.correo.trim())) {

      this.errorCorreo =
        'Ingresa un correo electrónico válido.';

      return false;
    }

    this.errorCorreo = '';

    return true;
  }

  validarConfirmarContrasena(): boolean {

    if (this.confirmarContrasena.trim() === '') {

      this.errorConfirmarContrasena =
        'Este campo es obligatorio.';

      return false;
    }

    if (this.confirmarContrasena !== this.contrasena) {

      this.errorConfirmarContrasena =
        'Las contraseñas no coinciden.';

      return false;
    }

    this.errorConfirmarContrasena = '';

    return true;
  }

  validarGenero(): boolean {

    if (this.genero === '') {

      this.errorGenero =
        'Este campo es obligatorio.';

      return false;
    }

    this.errorGenero = '';

    return true;
  }

  validarTerminos(): boolean {

    if (!this.terminos) {

      this.errorTerminos =
        'Debes aceptar los términos y condiciones.';

      return false;
    }

    this.errorTerminos = '';

    return true;
  }

  validarLetras(valor: string, campo: 'nombres' | 'apellidos'): string {
    const mensaje = valor.trim() && !/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(valor.trim())
      ? 'Solo se permite escribir letras.'
      : '';

    if (campo === 'nombres') {
      this.errorNombres = mensaje;
    } else {
      this.errorApellidos = mensaje;
    }

    return valor;
  }

  validarNumeros(valor: string, campo: 'documento' | 'celular'): string {
    const mensaje = valor.trim() && !/^\d+$/.test(valor.trim())
      ? 'Solo se permite escribir números.'
      : '';

    if (campo === 'documento') {
      this.errorDocumento = mensaje;
    } else {
      this.errorCelular = mensaje;
    }

    return valor;
  }

  registrar(): void {

    let formularioValido = true;

    if (!this.validarCampoObligatorio(this.nombres, 'nombres')) {
      formularioValido = false;
    }

    if (!this.validarCampoObligatorio(this.apellidos, 'apellidos')) {
      formularioValido = false;
    }

    if (!this.validarCampoObligatorio(this.documento, 'documento')) {
      formularioValido = false;
    }

    if (!this.validarCampoObligatorio(this.celular, 'celular')) {
      formularioValido = false;
    }

    if (!this.validarCorreo()) {
      formularioValido = false;
    }

    if (!this.validarCampoObligatorio(this.contrasena, 'contrasena')) {
      formularioValido = false;
    }

    if (!this.validarConfirmarContrasena()) {
      formularioValido = false;
    }

    if (!this.validarGenero()) {
      formularioValido = false;
    }

    if (!this.validarTerminos()) {
      formularioValido = false;
    }

    if (formularioValido) {

      alert('Registro realizado correctamente.');

    }
  }
}


