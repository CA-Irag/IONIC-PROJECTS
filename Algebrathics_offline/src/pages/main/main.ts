import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainmenuPage } from '../mainmenu/mainmenu';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  user_name = "";
  user_section = "";
  user_school = "";

  ionViewDidLoad() {
    this.user_name = window.localStorage.getItem("name");
    this.user_section = window.localStorage.getItem("section");
    this.user_school = window.localStorage.getItem("school");
  }

  goToMainMenu() { this.navCtrl.push(MainmenuPage); }
}
