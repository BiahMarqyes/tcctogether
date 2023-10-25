import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../auth/autenticacao.service';

@Component({
  selector: 'app-logincli',
  templateUrl: './logincli.page.html',
  styleUrls: ['./logincli.page.scss'],
})
export class LogincliPage implements OnInit {

  hide = true;

  formLogin!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    private route: Router){}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(): void{
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email ]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login(){
    if(!this.formLogin.valid){
      return;
    }
    this.authService.login(this.formLogin.getRawValue()).then(resposta => {
      this.route.navigate(['home'])
    },(error) => {
      alert('erro ao tentar fazer o login')
    })
  }



}
