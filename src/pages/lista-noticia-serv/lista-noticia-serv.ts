import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../../model/noticia';
import { NoticiaService } from '../../services/noticia.service';

/**
 * Generated class for the ListaNoticiaServPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-noticia-serv',
  templateUrl: 'lista-noticia-serv.html',
})
export class ListaNoticiaServPage {

  noticias : Noticia[] = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public NoticiaServ : NoticiaService) {
  }

  ionViewDidLoad() {
    this.NoticiaServ.listaDeNoticias().subscribe(response=>{
      this.noticias = response;
      console.log(this.noticias)
    }, error => {
      console.log('Servido não disponível')
    })
  }

}
