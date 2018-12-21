import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  quiz_title = '';
  quiz_key = '';
  quiz_questions = [];
  quiz_score = 0;
  current_answer = '';
  current_question = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quiz_title = navParams.get('title');
    this.quiz_key = navParams.get('key');
    this.quiz_questions = navParams.get('questions');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }

  updateScores(key, score){
    let jsonScores = localStorage.getItem('scores');
    let scores = JSON.parse(jsonScores);
    console.log('scores', scores);
    scores = { ...scores, [key]: score };
    console.log('scores', scores);
    let newScores = JSON.stringify(scores);
    localStorage.setItem('scores', newScores);
  }

  submitAnswer(){
    if( this.current_question < this.quiz_questions.length ) {
      console.log('qnumber', this.current_question + 1);
      console.log('current answer', this.current_answer);
      if( this.current_answer === this.quiz_questions[this.current_question].A ) {
        this.quiz_score++;
      }
      // if( this.current_question !== this.quiz_questions.length -1 ){ this.current_question++; }
      this.current_question++;
    } else { console.log('Finished Quiz: your score is',this.quiz_score); }
    this.current_answer = '';
  }

}
