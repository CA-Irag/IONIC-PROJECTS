import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  score: any;
  tscore: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.score = navParams.get('score');
    this.tscore = 10;
  }

  ionViewDidLoad() { }
  backMainMenu() { }
}
