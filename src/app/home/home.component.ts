import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/service/content.service';
import { PhoneClass} from '../phone';
import { PhoneService } from '../shared/service/phone.service';
import { FilterPipe } from '../filter.pipe';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FilterPipe]
})
export class HomeComponent implements OnInit {
  homeObj: Object;
  phones: PhoneClass [];
  fader = false;
  getPhones(): void {
    this.phoneService.getPhones()
      .subscribe(phones => this.phones = phones);
  }

  constructor(private contentService: ContentService,
              private phoneService: PhoneService) { }

  ngOnInit() {
    this.homeObj = this.contentService.Objs['home'];
    this.getPhones();
    console.log(this.phones);
  }

}
