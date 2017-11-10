import { Component, OnInit, HostListener } from '@angular/core';

import { ContentService } from '../shared/service/content.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navObj: Object;
  isCollapsed = true;
  isScrolled = false;
  startPos = 0;
  changePos = 50;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.navObj = this.contentService.Objs['nav'];
  }
  @HostListener('window:scroll', [])
  onScrollEvent() {
    this.startPos = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
    if (this.startPos >= this.changePos) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
    console.log(this.isScrolled);
  }

}
