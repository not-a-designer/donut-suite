import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Marchese } from './marchese';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Marchese
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Marchese),
  ],
  exports: [
    Marchese
  ]
})
export class MarcheseModule {}
