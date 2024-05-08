import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Test Account',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];
    statusUpdate = new EventEmitter<string>();
    constructor(private logService:LoggingService){}
    addAccount( name: string, status: string ){
        this.accounts.push({ name: name, status: status });
        this.logService.logStatusChanges(status);
    }
    updateAccount(id: number, status: string) {
        this.accounts[id].status = status;
        this.logService.logStatusChanges(status);
    }

}