import { Component, EventEmitter, Output } from '@angular/core';
import { ToastController } from 'ionic-angular';

import { AuthService } from '../../app/auth.service';

@Component({
  selector: 'signup',
  templateUrl: 'signup.html'
})
export class SignupComponent {

  email: string = '';
  password: string = '';
  confirm: string = '';

  @Output() signupSuccess = new EventEmitter<boolean>();

  constructor(
    public toastCtrl: ToastController,
    private authService: AuthService) {
    console.log('Hello SignupComponent Component');
  }

  onSignup() {
    let errorList: string = '';
    if (this.email === '') {
      errorList += 'Please enter an email ';
    }
    if (this.password === '') {
      errorList += 'Please enter a password ';
    }
    if (this.password.length < 6) {
      errorList += 'Password must be longer than 6 chars ';
    }
    if (this.confirm !== this.password || this.confirm === '') {
      errorList += 'Password confirmation does not match ';
    }


    if (errorList === '') {
      this.authService.signupUser(this.email, this.password);
      this.signupSuccess.emit(true);
    } else {
      this.toastCtrl.create({
        message: 'Errors: ' + errorList,
        position: 'middle',
        duration: 3000,
        dismissOnPageChange: true,
        cssClass: 'toastLineClass'
      }).present();
      console.log('Errors: ' + errorList);
    }
  }
}
