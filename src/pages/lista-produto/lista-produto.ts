import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import firebase from 'firebase';
import { Produto } from '../../model/produto';

/**
 * Generated class for the ListaProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-produto',
  templateUrl: 'lista-produto.html',
})
export class ListaProdutoPage {

  listaDeProdutos : Produto[] = [];//<--


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menu : MenuController ) {
  }
  

  getList() {

    var ref = firebase.firestore().collection("produto");
    ref.get().then(query => {
        query.forEach(doc => {
            let c = new Produto();
            c.setDados(doc.data());
            c.id = doc.id;
            this.listaDeProdutos.push(c);
        });
    });

  }
  

  ionViewDidLoad() {
    this.menu.enable(true);
    //this.listaDeClientes = this.clienteServ.getList();
    this.getList();

  }

 
  

  novoProduto(){
    this.navCtrl.push('NovoProdutoPage')
  }

  remove(obj : Produto){
    var ref = firebase.firestore().collection("produto");
    ref.doc(obj.id).delete()
      .then(()=>{
        this.listaDeProdutos = [];
        this.getList();
      }).catch(()=>{
        console.log('Erro ao atualizar');
      })

  }
  atualiza(obj : Produto){
    this.navCtrl.push('ProdutoVisualizaPage', {'produto': obj})

  }
}
