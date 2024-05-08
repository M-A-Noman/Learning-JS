import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers = [];
  inactiveUsers = [];
  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }
  //   onSetToInactive(id: number) {
  //     this.inactiveUsers.push(this.activeUsers[id]);
  //     this.activeUsers.splice(id, 1);
  //   }

  //   onSetToActive(id: number) {
  //     this.activeUsers.push(this.inactiveUsers[id]);
  //     this.inactiveUsers.splice(id, 1);
  //   }
  // }
}
