import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaNoticiaServPage } from './lista-noticia-serv';

@NgModule({
  declarations: [
    ListaNoticiaServPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaNoticiaServPage),
  ],
})
export class ListaNoticiaServPageModule {}
