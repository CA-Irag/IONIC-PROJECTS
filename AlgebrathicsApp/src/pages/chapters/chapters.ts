import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { QuizPage } from "../quiz/quiz";
import { FileOpener } from '@ionic-native/file-opener';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { File } from '@ionic-native/file';

/**
 * Generated class for the ChaptersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapters',
  templateUrl: 'chapters.html',
})
export class ChaptersPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fileOpener: FileOpener,
    private document: DocumentViewer,
    private theInAppBrowser: InAppBrowser,
    private file: File,
    private platform: Platform
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChaptersPage');
  }

  redirectToQuiz(id){
    console.log('open quiz');
    // let questions = [
    //   {
    //     N: 1,
    //     Q: 'What is your problem?',
    //     A: '1',
    //   },
    //   {
    //     N: 2,
    //     Q: '1 + 1 = ?',
    //     A: '2',
    //   }
    // ];
    // this.navCtrl.push(QuizPage, { title: 'Chapter 1: Topic 1', key: 'C1_T1', questions: questions });
  }

  openLesson(number){
    console.log('open lesson');
    // const options : InAppBrowserOptions = {
    //   location : 'yes',//Or 'no'
    //   hidden : 'no', //Or  'yes'
    //   clearcache : 'yes',
    //   clearsessioncache : 'yes',
    //   zoom : 'yes',//Android only ,shows browser zoom controls
    //   hardwareback : 'yes',
    //   mediaPlaybackRequiresUserAction : 'no',
    //   shouldPauseOnSuspend : 'no', //Android only
    //   closebuttoncaption : 'Close', //iOS only
    //   disallowoverscroll : 'no', //iOS only
    //   toolbar : 'yes', //iOS only
    //   enableViewportScale : 'no', //iOS only
    //   allowInlineMediaPlayback : 'no',//iOS only
    //   presentationstyle : 'pagesheet',//iOS only
    //   fullscreen : 'yes',//Windows only
    // };
    let filePath;
    // console.log('filePath', filePath);
    // this.fileUrl = filePath;
    // this.theInAppBrowser.create(filePath, '_system', options);

    // this.fileOpener.open(filePath, 'application/vnd.openxmlformats-officedocument.presentationml.presentation')
    //   .then(() => console.log('File is opened'))
    //   .catch(e => console.log('Error opening file', e));

    // if (this.platform.is('ios')) {
    //    filePath = this.file.documentsDirectory + 'www/assets/lessons/Lesson-'+number+'.pptx';
    // } else if (this.platform.is('android')) {
    //    filePath = this.file.dataDirectory + 'www/assets/lessons/Lesson-'+number+'.pptx';
    // } else if (this.platform.is('windows')) {
    //    filePath = this.file.dataDirectory + 'www/assets/lessons/Lesson-'+number+'.pptx';
    // }
    console.log('filePath', filePath);

    const options: DocumentViewerOptions = {
      title: 'My PDF'
    };
    const fileType = 'application/pdf';

    this.document.viewDocument(filePath, fileType, options);
  }

}
