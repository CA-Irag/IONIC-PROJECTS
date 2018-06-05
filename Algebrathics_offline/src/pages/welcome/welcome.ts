import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  registered = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.registered = window.localStorage.getItem("registered");
  }

  redirect(){ 
    var name = window.localStorage.getItem("name");
    var section = window.localStorage.getItem("section");
    var school = window.localStorage.getItem("school");
    
    if(name == null || section == null || school == null ){
      this.navCtrl.push( LoginPage );
    }else{
      this.navCtrl.push( ProfilePage );
    }
  }

  clear_info(){
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("section");
    window.localStorage.removeItem("school");
    window.localStorage.removeItem("registered");
    this.registered = null;
  }

}
