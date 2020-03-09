import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadesPesquisaComponent } from './cidades-pesquisa/cidades-pesquisa.component';
import { RouterModule } from '@angular/router';



@NgModule({
  exports: [CidadesPesquisaComponent],
  declarations: [CidadesPesquisaComponent],
  imports: [
    CommonModule, 
    RouterModule
  ]
})
export class CidadesModule { }
