import { Component,ElementRef,EventEmitter,Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();//we can created an alias of output like @Output('alias name') this will not reveal original name of the component
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContent', { static: true }) serverContent :ElementRef;
  constructor() {
    
  }
  // onAddServer() {
  //   this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
// }

  onAddServer(Name:HTMLInputElement) {
    this.serverCreated.emit({ serverName: Name.value, serverContent: this.serverContent.nativeElement.value });
  }
  // onAddServer(Name:HTMLInputElement,Content:HTMLInputElement) {
  //   this.serverCreated.emit({ serverName: Name.value, serverContent: Content.value });
  // }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
  // }
  // onAddBlueprint(Name:HTMLInputElement,Content:HTMLInputElement) {
  //   this.blueprintCreated.emit({ serverName: Name.value, serverContent: Content.value });
  // } //using the reference we can access the element
  onAddBlueprint(Name:HTMLInputElement) {
    this.blueprintCreated.emit({ serverName: Name.value, serverContent: this.serverContent.nativeElement.value });
  }
}
