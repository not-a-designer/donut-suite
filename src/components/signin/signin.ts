import { Component, EventEmitter, Output } from '@angular/core';
import { ToastController } from 'ionic-angular';

import { AuthService } from '../../app/auth.service';


@Component({
  selector: 'signin',
  templateUrl: 'signin.html'
})
export class SigninComponent {

  email: string = '';
  password: string = '';

  @Output() loginSuccess = new EventEmitter<boolean>();

  constructor(
    public toastCtrl: ToastController,
    private authService: AuthService) {
    console.log('Hello SigninComponent Component');
  }

  onSignin() {
    let errorList: string = '';
    if (this.email === '') {
      errorList += 'Please enter an email address\n';
    }
    if (this.password === '' || this.password.length < 6) {
      errorList += 'Please enter the correct password\n';
    }

    if (errorList === '') {
      this.authService.signinUser(this.email, this.password);
      this.loginSuccess.emit(true);
      
    } else {
      this.toastCtrl.create({
        message: errorList,
        position: 'middle',
        duration: 3000,
        dismissOnPageChange: true
      }).present();
      console.log('Errors: ' + errorList);
    }
  }

}
