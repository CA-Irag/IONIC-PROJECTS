import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { MainPage } from '../pages/main/main';
import { MainmenuPage } from '../pages/mainmenu/mainmenu';
import { LessonPage } from '../pages/lesson/lesson';
import { QuizPage } from '../pages/quiz/quiz';
import { ResultPage } from '../pages/result/result';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    MainPage,
    MainmenuPage,
    LessonPage,
    QuizPage,
    ResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    MainPage,
    MainmenuPage,
    LessonPage,
    QuizPage,
    ResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
