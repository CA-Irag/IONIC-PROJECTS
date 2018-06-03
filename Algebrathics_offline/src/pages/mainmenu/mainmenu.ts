import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LessonPage } from '../lesson/lesson';

@IonicPage()
@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html',
})
export class MainmenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainmenuPage');
  }

  goToPreTest(){ this.navCtrl.push(LessonPage, { posttype: 'pre' }); }
  goToPostTest(){ this.navCtrl.push(LessonPage, { posttype: 'post' }); }
}
