import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Counts } from './counts';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Counts
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Counts),
  ],
  exports: [
    Counts
  ]
})
export class CountsModule {}
