import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultPage } from '../result/result';

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  chapter: any;
  qnum: any;
  question: any;
  choices: any;
  answer: '';
  score: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chapter = navParams.get('chapter');
    this.qnum = 1;
    this.question = 'This is sample question?';
    this.choices = [ {value:'choice 1'}, {value:'choice 2'}, {value:'choice 3'} ];
    this.score = 10;
  }

  ionViewDidLoad() { }
  submitAnswer(){
    this.navCtrl.push(ResultPage, { score: this.score });
  }
}
