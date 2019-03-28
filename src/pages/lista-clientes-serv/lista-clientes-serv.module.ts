import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaClientesServPage } from './lista-clientes-serv';

@NgModule({
  declarations: [
    ListaClientesServPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaClientesServPage),
  ],
})
export class ListaClientesServPageModule {}
