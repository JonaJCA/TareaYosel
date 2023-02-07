import { Component } from '@angular/core';
import { IngresaService } from '../services/ingresa.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {

  get historial(){
    return this.IngresaService.historial;
  }

  constructor( private IngresaService: IngresaService) { }
  
  ResultadoBtn( query:string ){
    
    console.log("El numero pickado es:" + query);
  
}
 
}
