import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import { PhoneService } from '../shared/service/phone.service';
import { PhoneClass } from '../phone';
import { ContentService } from '../shared/service/content.service';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css'],
})
export class PhoneDetailComponent implements OnInit {
  @Input() phone: PhoneClass;
  detailObj: object;

  constructor(
    private route: ActivatedRoute,
    private phoneService: PhoneService,
    private location: Location,
    private contentService: ContentService,
  ) {}

  ngOnInit() {
    this.getPhone();
    this.detailObj = this.contentService.Objs['service'];
  }
  getPhone(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.phoneService.getPhone(id).subscribe(phone => this.phone = phone);
  }
  goBack(): void {
    this.location.back();
  }
}
