import { Component } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent {

  alerta : string =  "alert-danger";

   propiedades:any = {
    danger: true,
  }
}
