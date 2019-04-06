import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, MenuController, ToastController } from 'ionic-angular';
import { EmailValidator } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@IonicPage()
export class HomePage {

  @ViewChild('email') email
  @ViewChild('senha') senha
  
  constructor(public fireAuth : AngularFireAuth,
  public menu : MenuController,
  public toastCtrl: ToastController,){

  }

  ionViewDiload(){
    this.menu.enable(false);
  }

  login(){
    this.fireAuth.auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
    .then(()=>{
      this.presentToast("logado com sucesso!");
    }).catch(()=>{
      this.presentToast("Usuário inválido!");
    })
  }

  cadastrar(){
    this.fireAuth.auth.createUserWithEmailAndPassword(this.email.value, this.senha.value)
    .then(()=>{
      this.presentToast("Cadastrado com sucesso!");
    }).catch(()=>{
      this.presentToast("Usuário inválido!");
    })
  }

  presentToast(msg : string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
