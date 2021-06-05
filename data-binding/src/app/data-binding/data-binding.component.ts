import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.training';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/g/400/200/nature/';

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false; 

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 10;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
    }

  constructor() { }

  ngOnInit(): void {
  }

}
