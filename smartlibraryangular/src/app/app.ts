import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('smartlibraryangular');
  libros = [
 { id: 1, nombre: 'Cien Años de Soledad', autor: 'Gabriel García Marquez' },
 { id: 2, nombre: 'Viaja al Centro de la Tierra', autor: 'Julio Verne' },
 { id: 3, nombre: 'Crimen y Castigo', autor: 'Fedor Dostoievsky' },
 ];

}
