import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'app/providers/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private views = [];
  private session: any;

  constructor(private electronService: ElectronService) {

    this.session = this.electronService.Electron.remote;

    this.views.push({
      id: '1513029575174',
      url: 'http://whatismyip.host/'
    });



    // const BrowserWindow = this.electronService.Electron.remote.BrowserWindow;
    // const mainWindow = new BrowserWindow({
    //   'width': 400,
    //   'height': 300,
    //   'center': true,
    //   'title': 'Main window',
    // });

    // const proxy = '180.247.178.186:8080';

    // mainWindow.webContents.session.setProxy({ proxyRules: proxy }, function () {
    //   mainWindow.loadURL('https://www.twitch.tv/cojl');
    // });

    // mainWindow.loadURL('https://whatismyipaddress.com/');

  }

  ngOnInit() {

  }

  new() {

    const id = Date.now();
    this.views.push({
      id: id,
      url: 'http://www.google.se'
    });

    setTimeout(() => {

      const cookies = this.electronService.Electron.remote.fromPartition('id').cookies;
      cookies.get(
        {},
        result => console.log('Found the following cookies', result)
      )
      console.log(cookies);

    }, 100);

  }



}
