import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home } from './home';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Home

  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Home),
  ],
  exports: [
    Home
  ]
})
export class HomeModule {}
