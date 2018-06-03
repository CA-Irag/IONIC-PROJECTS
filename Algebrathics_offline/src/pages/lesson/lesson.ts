import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuizPage } from '../quiz/quiz';

@IonicPage()
@Component({
  selector: 'page-lesson',
  templateUrl: 'lesson.html',
})
export class LessonPage {

  posttype: '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.posttype = navParams.get('posttype');
  }

  ionViewDidLoad() { }
  goToChapterOne() { this.navCtrl.push(QuizPage, { chapter: '1' }); }
  goToChapterTwo() { this.navCtrl.push(QuizPage, { chapter: '2' }); }

}
