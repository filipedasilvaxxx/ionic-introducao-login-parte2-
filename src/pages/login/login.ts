import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') email
  @ViewChild('senha') senha
  
  constructor(public fireAuth : AngularFireAuth,
  public menu : MenuController){
  }

  login(){
    this.fireAuth.auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
    .then(()=>{
      console.log("logado com sucesso!");
    }).catch(()=>{
      console.log("Usuário inválido!");
    })
  }
}
