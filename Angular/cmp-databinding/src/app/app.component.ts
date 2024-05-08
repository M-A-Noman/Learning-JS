import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'TestServer', content: 'Just a test!' }];
   evenNumbers = [];
   oddNumbers = [];
  onServerCreated(serverData: { serverName: string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBlueprintCreated(blueprintData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  onGameStarted(values:{type:string,value:number}) {
    if (values.type == 'even') {
      this.evenNumbers.push(values.value);
      // console.log(values.value);
      // console.log(this.evenNumbers)
    } else {
      this.oddNumbers.push(values.value);
    }
    //  console.log(values);
  }
  onGameStopped(stopped:{type:boolean}) {
    if (stopped.type == true) {
      this.evenNumbers.splice(0,this.evenNumbers.length)
      this.oddNumbers.splice(0,this.oddNumbers.length)
    }
  }
  getValue(value) {
    return { value: value };
  }
  
}
