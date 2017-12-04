import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/service/content.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  aboutObj: Object;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.aboutObj = this.contentService.Objs['home'];
  }

}
