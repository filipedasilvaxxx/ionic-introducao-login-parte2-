import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Cliente } from '../../model/cliente';
import firebase from 'firebase';
import { ClienteService } from '../../service/cliente.service';
import { ClienteVisualizaPage } from '../cliente-visualiza/cliente-visualiza';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  listaDeClientes: Cliente[] = [];//<--



  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    //public clienteServ : ClienteService
  ) {

  }

  getList() {

    var ref = firebase.firestore().collection("cliente");
    ref.get().then(query => {
      query.forEach(doc => {
        let c = new Cliente();
        c.setDados(doc.data());
        c.id = doc.id;

        let ref = firebase.storage().ref()
          .child(`clientes/${doc.id}.jpg`);

        ref.getDownloadURL().then(url => {
          c.img = url;
          this.listaDeClientes.push(c);
          //console.log(url);
        }).catch(() => {

        })
      });
    });

  }


  ionViewDidLoad() {
    this.menu.enable(true);
    this.getList();

  }




  novocliente() {
    this.navCtrl.push('NovoClientePage')
  }

  remove(obj: Cliente) {
    var ref = firebase.firestore().collection("cliente");
    ref.doc(obj.id).delete()
      .then(() => {
        this.listaDeClientes = [];
        this.getList();
      }).catch(() => {
        console.log('Erro ao atualizar');
      })

  }
  atualiza(obj: Cliente) {
    this.navCtrl.push('ClienteVisualizaPage', { 'cliente': obj })

  }




}
