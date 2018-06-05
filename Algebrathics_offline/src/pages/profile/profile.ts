import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  name = null;
  section = null;
  school = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = window.localStorage.getItem("name");
    this.section = window.localStorage.getItem("section");
    this.school = window.localStorage.getItem("school");
  }

  goto_pretest(){

  }

}
