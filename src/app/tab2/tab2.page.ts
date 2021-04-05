import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  coordinates: any[] = [];

  constructor(public alertController: AlertController) {}

  async locate() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.coordinates.push(coordinates.coords);
    } catch(err) {
      this.presentAlert(err);
    }
  }

  async presentAlert(error: any) {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Subtitle',
      message: error.message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
