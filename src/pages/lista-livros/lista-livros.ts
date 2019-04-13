import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Livro } from '../../model/livro';
import firebase from 'firebase';

/**
 * Generated class for the ListaLivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-livros',
  templateUrl: 'lista-livros.html',
})
export class ListaLivrosPage {

  listaDeLivros : Livro[] = [];//<--


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menu : MenuController ) {
  }
  

  getList() {

    var ref = firebase.firestore().collection("livro");
    ref.get().then(query => {
        query.forEach(doc => {
            let c = new Livro();
            c.setDados(doc.data());
            c.id = doc.id;

            let ref = firebase.storage().ref()
            .child(`livros/${doc.id}.jpg`);
      
          ref.getDownloadURL().then(url => {
            c.img = url;
            this.listaDeLivros.push(c);
            //console.log(url);
          }).catch(()=>{

          })
            
        });
    });

  }
  


  ionViewDidLoad() {
    this.menu.enable(true);
    //this.listaDeClientes = this.clienteServ.getList();
    this.getList();

  }

 
  

  novolivro(){
    this.navCtrl.push('NovoLivroPage')
  }

  remove(obj : Livro){
    var ref = firebase.firestore().collection("livro");
    ref.doc(obj.id).delete()
      .then(()=>{
        this.listaDeLivros = [];
        this.getList();
      }).catch(()=>{
        console.log('Erro ao atualizar');
      })

  }
  atualiza(obj : Livro){
    this.navCtrl.push('LivroVisualizaPage', {'livro': obj})

  }




}
