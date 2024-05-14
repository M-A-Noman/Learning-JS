import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  contentChanged = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route.queryParams);
    // console.log(this.route.fragment);
    this.route.queryParams.subscribe(
      (queryParam) => {
        this.allowEdit = queryParam['allowEdit'] === 'true' ? true : false;
        console.log(typeof (this.allowEdit))
      }
    )
    this.route.fragment.subscribe(
      (fragment) => {
        console.log('from subscribe', fragment);
      }
    )
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(id);
    })
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.contentChanged = true;
  }
  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) { return true; }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.contentChanged) {
      return confirm('Do You want to discard Changed?');
    } else return true;
    
  };

}
