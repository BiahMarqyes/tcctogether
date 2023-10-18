import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {

  formInformacoes: FormGroup;

  mensagens = {
    rua: [
      { tipo: 'required', mensagem: 'O campo Rua é obrigatório.' },
      { tipo: 'minlength', mensagem: 'A Rua deve ter pelo menos 3 caracteres.' },
    ],
    numero: [
      { tipo: 'required', mensagem: 'O campo Número é obrigatório.' },
    ],
    bairro: [
      { tipo: 'required', mensagem: 'O campo Bairro é obrigatório.' },
    ],
    horario: [
      { tipo: 'required', mensagem: 'O campo Horário de Atendimento é obrigatório.' },
    ],
    sobre: [
      { tipo: 'required', mensagem: 'O campo Sobre a clínica é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O texto deve ter pelo menos 10 caracteres.', },
    ],
  };

  constructor(private formBuilder: FormBuilder, private route: Router) {
    this.formInformacoes = this.formBuilder.group({
      rua: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      numero: ['', Validators.compose([Validators.required])],
      bairro: ['', Validators.compose([Validators.required])],
      horario: ['', Validators.compose([Validators.required])],
      sobre: ['', Validators.compose([Validators.required, Validators.minLength(10),])],
    });
   }

  ngOnInit() {
  }

  async salvarInformacoes() {
    if(this.formInformacoes.valid){
      let rua = this.formInformacoes.value.rua;
      let numero = this.formInformacoes.value.numero;
      let bairro = this.formInformacoes.value.bairro;
      let horario = this.formInformacoes.value.bairro;
      let sobre = this.formInformacoes.value.bairro;
      console.log(this.formInformacoes)
    }else{
      alert('Formulário Inválido!');
    }
  }

}
