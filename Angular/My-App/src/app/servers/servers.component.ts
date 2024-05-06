import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
  styles: [`
    .greaterFive{
      color:white;
    }
  `]
  
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server Created yet";
  serverName = "";
  userName = "";
  serverCreated = false;
  servers = ['test1', 'test2'];
  showDetails = 0;
  clicksOnButton = [];
  logElement = [];
  constructor() { 
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2000);
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server Created Successfully! Name of the server is "+this.serverName;
  }
  onUpdateServerName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
  onReset() {
    this.userName = "";
  }
  onDisplayDetails() {

    this.showDetails++;
    // this.clicksOnButton.push(this.showDetails);
    // console.log(this.clicksOnButton);
    this.logElement.push(new Date());
  }
  getColorForItem(item) {
    if (item >= 5) {
      return 'blue';
    } else return '';
  }
  getItem(item) {
    return item;
  }
}

 