import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
