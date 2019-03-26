import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-form-contate',
  templateUrl: 'form-contate.html',
})
export class FormContatePage {
  formGroup : FormGroup;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder : FormBuilder,
    public alertCtrl: AlertController) {
  

    this.formGroup = this.formBuilder.group({
      nome : ['',[Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      email : ['',[Validators.required, Validators.email]],
      assunto : ['Suporte',[Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      mensagem: ['',[Validators.required]]
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FormContatePage');
  }

  enviarMensagem(){
    console.log(this.formGroup.value);
    this.showAlert();
    this.navCtrl.setRoot('HomePage');
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Mensagem',
      subTitle: 'Cadastrado com sucesso',
      buttons: ['FECHAR']
    });
    alert.present();
  }
}
