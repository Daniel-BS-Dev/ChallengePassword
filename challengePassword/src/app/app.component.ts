import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  esconderSenha = false;
  esconderConfirmacaoSenha = false;

  valorCampoSenha = '';
  valorCampoConfirmarSenha = '';

  ngOnInit(): void {

  }

  obterValorInputSenha(valueCampo: any) {
    this.valorCampoSenha = valueCampo.value;
    console.log(this.valorCampoSenha);
  }

  obterValorInputConfirmarSenha(valueCampo: any) {
    this.esconderConfirmacaoSenha = valueCampo.value
    console.log(this.esconderConfirmacaoSenha);
  }
}
