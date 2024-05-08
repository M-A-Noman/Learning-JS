import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingService]
})
export class NewAccountComponent {
  
  constructor(private logService: LoggingService,
    private accountService: AccountService) {
    this.accountService.statusUpdate.subscribe(
      (status: string) => {
        alert('Status is updated '+status);
       }
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountService.addAccount(accountName, accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
    // this.logService.logStatusChanges(accountStatus);
  }
}
