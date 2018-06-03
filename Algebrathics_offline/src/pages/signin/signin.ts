import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  input_name = '';
  input_section = '';
  input_school = '';
  stored_name = '';
  stored_section= '';
  stored_school = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  submit_info(){
    window.localStorage.setItem("name", this.input_name);
    window.localStorage.setItem("section", this.input_section);
    window.localStorage.setItem("school", this.input_school);
    this.navCtrl.push(MainPage);
  }

  get_info(){
    this.stored_name = window.localStorage.getItem("name");
    this.stored_section = window.localStorage.getItem("section");
    this.stored_school = window.localStorage.getItem("school");
  }
}
