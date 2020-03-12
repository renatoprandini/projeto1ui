import { Component, OnInit } from '@angular/core';
import { CidadeFiltro, CidadesService } from '../cidades.service';

@Component({
  selector: 'app-cidades-pesquisa',
  templateUrl: './cidades-pesquisa.component.html',
  styleUrls: ['./cidades-pesquisa.component.css']
})
export class CidadesPesquisaComponent implements OnInit {

  totalRegistro = 0;
  filtro = new CidadeFiltro();
  cidades = [];



  constructor(private cidadesService: CidadesService) { }

  ngOnInit() {
  }

  pesquisar(pagina=0){
    this.filtro.pagina = pagina;
  }

}
