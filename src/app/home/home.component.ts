import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeObj = {
    title: 'simplyScreens',
    subtitle: 'Lets NOT Have A Smashing Time',
    image: 'assets/main-img-home.jpeg',
    icon: 'assets/main-icon-home.png'
  };

  constructor() { }

  ngOnInit() {
  }

}
