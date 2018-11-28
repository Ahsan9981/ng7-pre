import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h5Style: boolean = false;

  users: User[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUser().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  firstClick():void {
    console.log('clicked in component');
    this.dataService.firstClick();
    this.h5Style = !this.h5Style;
  }

}
