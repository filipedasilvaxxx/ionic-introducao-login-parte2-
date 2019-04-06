import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Cliente } from '../../model/cliente';
import firebase from 'firebase';
import { ClienteService } from '../../service/cliente.service';

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
  listaDeClientes : Cliente[] = [];//<--


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menu : MenuController,
    public clienteServ : ClienteService) {

  }

  

  ionViewDidLoad() {
    this.menu.enable(true);
    this.listaDeClientes = this.clienteServ.getList();

  }

 

}
