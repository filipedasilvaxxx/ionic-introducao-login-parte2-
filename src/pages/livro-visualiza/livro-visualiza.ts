import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Livro } from '../../model/livro';

/**
 * Generated class for the LivroVisualizaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livro-visualiza',
  templateUrl: 'livro-visualiza.html',
})
export class LivroVisualizaPage {

  formGroup: FormGroup;

  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  livro = new Livro();

  imagem: string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

    this.firestore.settings(this.settings);
    this.livro = this.navParams.get('livro');

    this.formGroup = this.formBuilder.group({
      titulo: [this.livro.titulo],
      autor: [this.livro.autor],
      preco: [this.livro.preco],
      resumo: [this.livro.resumo],

    })

  }

  ionViewDidLoad() {
    this.downloadFoto();
  }

  atualizar() {
    let ref = this.firestore.collection('livro')
    ref.doc(this.livro.id).set(this.formGroup.value)
      .then(() => {
        console.log('Atualizado com sucesso');
        this.navCtrl.setRoot('ListaLivrosPage');
      }).catch(() => {
        console.log('Erro ao atualizar');
      })
  }


  enviaArquivo(event) {
    let imagem = event.srcElement.files[0];
    //console.log(imagem.name);
    let ref = firebase.storage().ref()
      .child(`livros/${this.livro.id}.jpg`);
    ref.put(imagem).then(url => {
      console.log('Enviado com Sucesso')
      this.downloadFoto();

    })

  }

  downloadFoto() {
    let ref = firebase.storage().ref()
      .child(`livros/${this.livro.id}.jpg`);

    ref.getDownloadURL().then(url => {
      this.imagem = url;

      //console.log(url);
    }).catch(()=>{
      
    })
  }
}
