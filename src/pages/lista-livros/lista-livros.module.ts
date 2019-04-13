import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaLivrosPage } from './lista-livros';

@NgModule({
  declarations: [
    ListaLivrosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaLivrosPage),
  ],
})
export class ListaLivrosPageModule {}
