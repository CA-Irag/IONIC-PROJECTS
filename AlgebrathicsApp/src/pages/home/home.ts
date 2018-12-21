import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChaptersPage } from "../chapters/chapters";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user_details = {
    idnumber: '',
    fullname: '',
    section: '',
    email: '',
    username: '',
  };

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.user_details.idnumber = localStorage.getItem('auth_idnumber');
    this.user_details.fullname = localStorage.getItem('auth_fullname');
    this.user_details.section = localStorage.getItem('auth_section');
    this.user_details.email = localStorage.getItem('auth_email');
    this.user_details.username = localStorage.getItem('auth_username');
  }

  redirectChaptersPage(){
    this.navCtrl.push(ChaptersPage, {});
  }
}
