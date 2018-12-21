import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';

import { HomePage } from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  inputs = {
    idnumber: '',
    password: '',
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewDidEnter(){
    this.menu.swipeEnable(false);
  }

  ionViewWillLeave(){
    this.menu.swipeEnable(true);
  }

  showAlert(title, message) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  loginForm() {
    let saved_idnumber = localStorage.getItem('auth_idnumber');
    let saved_password = localStorage.getItem('auth_password');

    if ( this.inputs.idnumber === saved_idnumber && this.inputs.password === saved_password ){
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('logged_idnumber', this.inputs.idnumber);
      this.navCtrl.push(HomePage, {});
    } else {
      this.showAlert('Authentication Failed', 'ID number or Password is invalid.')
    }
  }

}
