import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { CidadesModule } from './cidades/cidades.module';
import { CidadesPesquisaComponent } from './cidades/cidades-pesquisa/cidades-pesquisa.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: 'cidades', component: CidadesPesquisaComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    CoreModule,
    CidadesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
