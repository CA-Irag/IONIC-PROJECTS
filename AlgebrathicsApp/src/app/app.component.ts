import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();
    this.initializeScores();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  resetStorage(){
    localStorage.removeItem('isRegistered');
    localStorage.removeItem('auth_email');
    localStorage.removeItem('auth_fullname');
    localStorage.removeItem('auth_idnumber');
    localStorage.removeItem('auth_password');
    localStorage.removeItem('auth_section');
    localStorage.removeItem('auth_username');

    this.logout();
  }

  logout(){
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('logged_idnumber');

    this.nav.setRoot(WelcomePage);
  }

  initializeScores(){
    let initialScores = {
      PRE_TEST: 0,
      POST_TEST: 0,
      C1_T1: 0,
      C1_T2: 0,
      C2_T1: 0,
      C2_T2: 0,
    };
    let jsonScores;
    let storedScore = localStorage.getItem('scores');
    if(storedScore && storedScore !== '') { jsonScores = storedScore; }
    else { jsonScores = JSON.stringify(initialScores); }
    localStorage.setItem('scores', jsonScores);
  }
}
