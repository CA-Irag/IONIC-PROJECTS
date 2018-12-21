import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';

import { HomePage } from "../home/home";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  inputs = {
    email: '',
    fullname: '',
    idnumber: '',
    password: '',
    section: '',
    username: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  ionViewDidEnter(){
    this.menu.swipeEnable(false);
  }

  ionViewWillLeave(){
    this.menu.swipeEnable(true);
  }

  signupForm() {
    localStorage.setItem('isRegistered', 'true');
    localStorage.setItem('auth_email', this.inputs.email);
    localStorage.setItem('auth_fullname', this.inputs.fullname);
    localStorage.setItem('auth_idnumber', this.inputs.idnumber);
    localStorage.setItem('auth_password', this.inputs.password);
    localStorage.setItem('auth_section', this.inputs.section);
    localStorage.setItem('auth_username', this.inputs.username);

    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('logged_idnumber', this.inputs.idnumber);
    this.navCtrl.push(HomePage, {});
  }
}
