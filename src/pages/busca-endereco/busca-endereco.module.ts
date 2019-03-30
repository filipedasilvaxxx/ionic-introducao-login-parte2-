import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscaEnderecoPage } from './busca-endereco';

@NgModule({
  declarations: [
    BuscaEnderecoPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscaEnderecoPage),
  ],
})
export class BuscaEnderecoPageModule {}
