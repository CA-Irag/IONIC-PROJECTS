import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  input_name      = null;
  input_section   = null;
  input_school    = null;
  stored_name     = null;
  stored_section  = null;
  stored_school   = null; 
  error_msg       = null;

  submit_info(){
    console.log(this.input_name);
    if( this.form_validated() ){
      window.localStorage.setItem("name", this.input_name);
      window.localStorage.setItem("section", this.input_section);
      window.localStorage.setItem("school", this.input_school);
      window.localStorage.setItem("registered", 'true');
      this.navCtrl.push(ProfilePage);
    }
  }

  get_info(){
    this.stored_name = window.localStorage.getItem("name");
    this.stored_section = window.localStorage.getItem("section");
    this.stored_school = window.localStorage.getItem("school");
  }

  form_validated(){
    if ( this.input_name == null ){
      this.error_msg = 'Please enter your name';
      return false;
    }
    else if ( this.input_section == null ){
      this.error_msg = 'Please enter your section';
      return false;
    }
    else if ( this.input_school == null ){
      this.error_msg = 'Please enter your school';
      return false;
    }else{
      return true;
    }
  }
}
