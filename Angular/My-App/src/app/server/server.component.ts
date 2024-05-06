import { Component } from "@angular/core";
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online{
      color:white;
    }  
  `]
})
export class ServerComponent{
    serverId = 11;
    serverStatus = 'offline';
    constructor() {
        this.serverId=Math.round(Math.random()*10)
        this.serverStatus = this.serverId%2==0 ? 'offline' : 'online'
    }
    getServerStatus():string{
        return this.serverStatus ;
    }
    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
    
}