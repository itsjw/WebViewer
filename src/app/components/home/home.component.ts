import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'app/providers/electron.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private proxyList;
  private views = [];
  private session: any;

  constructor(private electronService: ElectronService) {

    this.proxyList = [
      {
        adress: '35.183.12.205:808',
        uses: 0
      }, {
        adress: '112.203.117.136:8080',
        uses: 0
      }, {
        adress: '147.135.210.114:54566',
        uses: 0
      }, {
        adress: '201.151.178.235:8080',
        uses: 0
      }, {
        adress: '133.242.30.45:3128',
        uses: 0
      }
    ];

    // this.views.push({
    //   id: '1513029575174',
    //   url: 'https://www.goldenfrog.com/whatismyipaddress'
    // });

    // const part = this.electronService.electronRemote.session.fromPartition('1513029575174');
    // const proxy = '35.183.12.205:808';

    // part.setProxy({ proxyRules: proxy }, function () {

    // });

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
      url: 'https://www.twitch.tv/badlski'
    });

    setTimeout(() => {

      const sess = this.electronService.electronRemote.session.fromPartition(id.toString());

      for (let i = 0; i < this.proxyList.length; i++) {
        const proxy = this.proxyList[i];
        if (proxy.uses === 0) {
          this.proxyList[i].uses++;
          sess.setProxy({ proxyRules: proxy.adress }, function () { });
          i = 1000;
          console.log(this.proxyList);
        }
      }
    }, 100);

  }



}
