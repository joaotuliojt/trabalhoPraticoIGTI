import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selecao-component',
  templateUrl: './selecao-component.component.html',
  styleUrls: ['./selecao-component.component.css']
})
export class SelecaoComponentComponent implements OnInit {


  @Input() titulo:string = '';
  @Input() opcoes: string[] = [];
  @Input() escolhaAte: number = 0;
  limite: number = 0;
  seleciona(e: any){
    let checked = e.target.checked;
    if(checked){
      this.limite++;
    }else{
      this.limite--;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
