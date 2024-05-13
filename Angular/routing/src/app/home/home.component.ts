import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onLoadServer(id: number) {
    // more codes
    this.router.navigate(['/servers', id, 'edit'], {queryParams:{ alowEdit: 2 },fragment:'loaded'});
  }
}
