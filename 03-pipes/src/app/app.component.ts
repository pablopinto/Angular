import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Capitan America'

  nombre2: string = 'pAbLo FRanCIsCo PinTo cEbRiaN'

  arreglo = ['Spiderman','Batman','Hulk','Aquaman','Linterna Verde','Thor','Loki','Groot','Iron Man','Scarlet Witch'];

  PI: number = Math.PI;

  porcentaje: number = 0.234;

  salario: number = 1234.5;

  fecha: Date = new Date();

  videoUrl: string = 'https://www.youtube.com/embed/eBGIQ7ZuuiU';

  activar: boolean = true;

  valorPromesa = new Promise<string>( (resolve, reject) => {
    setTimeout(() => {
      resolve('llegan los datos 4.5 segundos despues')
    },4500)
  } );

  heroe ={
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion:{
      calle: 'Primera',
      casa: 20
    }
  }
}
