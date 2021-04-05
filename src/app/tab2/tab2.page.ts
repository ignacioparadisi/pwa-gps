import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  coordinates: any[] = [];

  constructor() {}

  async locate() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.coordinates.push(coordinates.coords);
  }

}
