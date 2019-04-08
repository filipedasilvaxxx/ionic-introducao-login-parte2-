import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-novo-cliente',
  templateUrl: 'novo-cliente.html',
})
export class NovoClientePage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder : FormBuilder) {
      this.formGroup = this.formBuilder.group({
        nome : [''],
        telefone : [''],
        email : [''],
      })
  }

  formGroup : FormGroup;

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoClientePage');
  }

}
