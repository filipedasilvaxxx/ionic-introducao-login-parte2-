import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaFilmesServPage } from './lista-filmes-serv';

@NgModule({
  declarations: [
    ListaFilmesServPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaFilmesServPage),
  ],
})
export class ListaFilmesServPageModule {}
