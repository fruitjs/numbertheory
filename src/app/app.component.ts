import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'numbertheory';
  userdata;
  constructor(private userService: UserService) {


  }
  ngOnInit() {
    this.userService.fetchUserDetails().subscribe((data: any[]) => {
      this.userdata = data;
    });
  }
}
