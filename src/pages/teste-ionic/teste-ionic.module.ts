import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TesteIonicPage } from './teste-ionic';

@NgModule({
  declarations: [
    TesteIonicPage,
  ],
  imports: [
    IonicPageModule.forChild(TesteIonicPage),
  ],
})
export class TesteIonicPageModule {}
