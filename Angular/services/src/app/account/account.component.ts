import { Component,  Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  
  constructor(private logService:LoggingService, private accountService:AccountService){}

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    this.accountService.statusUpdate.emit(status);
    // console.log('A server status changed, new status: ' + status);
    // this.logService.logStatusChanges(status);
  }
}
