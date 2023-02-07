import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngresaService {

  private _historial: string[] = [];

  get historial(){
    
    return [...this._historial];
  }

  ingresarNumeros( query: string){
    
    
    
    if(!this._historial.includes(query)){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
    }

    

    //console.log(this._historial);

  }

  
}
