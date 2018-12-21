import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { LoginPage } from "../login/login";
import { SignupPage} from "../signup/signup";
import { HomePage} from "../home/home";

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  ionViewDidEnter(){
    this.menu.swipeEnable(false);
  }

  ionViewWillLeave(){
    this.menu.swipeEnable(true);
  }

  startApp(event, item) {
    let isRegistered = localStorage.getItem('isRegistered');
    let isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if ( isRegistered !== null ) {
      if ( isLoggedIn !== null ) {
        this.navCtrl.push(HomePage, {});
      } else {
        this.navCtrl.push(LoginPage, {});
      }
    } else {
      this.navCtrl.push(SignupPage, {});
    }
  }

}
