import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComputerPage } from './computer';

@NgModule({
  declarations: [
    ComputerPage,
  ],
  imports: [
    IonicPageModule.forChild(ComputerPage),
  ],
})
export class ComputerPageModule {}
