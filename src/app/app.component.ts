import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

  
export class AppComponent {

 
  
  title = 'Tarea solicitada por Mr. Yosel';
  
  
  aumenta: number[] = [10,20,30,40,50,60,70,80];

  


  ResultadoBtn( aumenta: number){
    
      console.log("El numero pickado es:" + aumenta);
    
  }
  
}
