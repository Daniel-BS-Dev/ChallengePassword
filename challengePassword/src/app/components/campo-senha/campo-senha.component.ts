import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-campo-senha',
  templateUrl: './campo-senha.component.html',
  styleUrls: ['./campo-senha.component.scss']
})
export class CampoSenhaComponent {

  @Input() esconderSenha = false;
  @Output() valorInput = new EventEmitter<string>();

  obterValorInput(valor: any) {
     return this.valorInput.emit(valor)
  }
}
