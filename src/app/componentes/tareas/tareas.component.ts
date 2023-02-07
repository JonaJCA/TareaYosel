import { query } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IngresaService } from '../services/ingresa.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent  {

  @ViewChild('txtIngresar') txtIngresar!:ElementRef<HTMLInputElement>;

  title = 'Tarea 2  solicitada por Mr. Yosel';

  constructor( private ingresarService: IngresaService) { }

  ingresar(){

    const valor = this.txtIngresar.nativeElement.value; 
    //console.log(valor);
    if(valor.trim().length === 0){
      return;
    }
    this.ingresarService.ingresarNumeros(valor);
    this.txtIngresar.nativeElement.value = '';
  }

}
