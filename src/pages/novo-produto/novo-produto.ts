import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import firebase from 'firebase';

/**
 * Generated class for the NovoProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novo-produto',
  templateUrl: 'novo-produto.html',
})
export class NovoProdutoPage {

  formGroup : FormGroup;
  
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder : FormBuilder) {

      this.firestore.settings(this.settings); 

      this.formGroup = this.formBuilder.group({
        nomeProduto : [''],
        preco : [],
        categoria : [''],
        descricao : ['']
      })
  }



  cadastrar(){
    let ref = this.firestore.collection('produto')
    ref.add(this.formGroup.value)
      .then(() =>{
        console.log('Cadastrado com sucesso');
        this.navCtrl.setRoot('ListaProdutoPage');
      }).catch(()=>{
        console.log('Erro ao cadastrar');
      })
      
  }
}


