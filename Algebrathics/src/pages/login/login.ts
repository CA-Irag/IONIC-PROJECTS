import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username = '';
  password = '';
  data: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public toastCtrl: ToastController) {

  }

  ionViewDidLoad() { console.log('ionViewDidLoad LoginPage'); }
  goToHomePage() { this.navCtrl.setRoot(HomePage); }

  authLogin(){
    if(this.username != '' && this.password != ''){
      var url = 'https://algebrathics.000webhostapp.com/api/authuser.php';
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');
      let postData = new FormData();
      postData.append('username', this.username);
      postData.append('password', this.password);

      this.data = this.http.post(url, postData);
      this.data.subscribe(data => {
        if(data.success){
          this.navCtrl.push(HomePage, {
            userdata: data.user_data
          });
        }else{
          console.log(data);
          this.errorToast( data.error_msg );
        }
      });
    }else{
      this.errorToast( "Please fill all of the remaining missing fields." )
    }
  }
  errorToast( toast_msg ) {
    let toast = this.toastCtrl.create({
      message: toast_msg,
      duration: 5000
    });
    toast.present();
  }

}
