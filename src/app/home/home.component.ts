import { Component, OnInit } from '@angular/core';

import { ContentService } from '../shared/service/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeObj: Object;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.homeObj = this.contentService.Objs['home'];
  }

}
