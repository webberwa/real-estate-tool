import { UserService } from './user/user.service';
import { Component, OnInit } from '@angular/core';
import { NavComponent } from './site/nav/nav.component';

@Component({
  providers: [NavComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private user: UserService) {}

  ngOnInit() {
    console.log('app component');
  }
}
