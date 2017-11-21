import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'app/providers/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = `App works !`;

  constructor(private electronService: ElectronService) {

    const BrowserWindow = this.electronService.Electron.remote.BrowserWindow;
    const mainWindow = new BrowserWindow({
      'width': 200,
      'height': 100,
      'center': true,
      'title': 'Main window',
    });

    const proxy = 'random.se.hma.rocks';

    // mainWindow.webContents.session.setProxy({ pacScript: '', proxyRules: proxy, proxyBypassRules: '' }, function () {
    //   mainWindow.loadURL('https://whatismyipaddress.com/');
    // });

    mainWindow.loadURL('https://whatismyipaddress.com/');

  }

  ngOnInit() {
  }

}
