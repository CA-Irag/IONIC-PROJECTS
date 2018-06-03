import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userdata = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userdata = navParams.get('userdata');
  }



}
