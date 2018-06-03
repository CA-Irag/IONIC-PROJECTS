import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,  public navParams: NavParams) { }
  redirect(){ 
    if(window.localStorage.getItem("name") == null ||
        window.localStorage.getItem("section") == null ||
        window.localStorage.getItem("school") == null ){
      this.navCtrl.push(SigninPage);
    }else{
      this.navCtrl.push(MainPage);
    }
  }
  clear_info(){
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("section");
    window.localStorage.removeItem("school");
  }
}
