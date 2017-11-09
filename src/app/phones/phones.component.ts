import { Component, OnInit } from '@angular/core';
import { PhoneClass } from '../phone';
import { PhoneService } from '../shared/service/phone.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css'],
})
export class PhonesComponent implements OnInit {
  phones: PhoneClass [];
  getPhones(): void {
    this.phoneService.getPhones()
      .subscribe(phones => this.phones = phones.slice(0, 4));
  }

  constructor(private phoneService: PhoneService) { }

  ngOnInit() {
    this.getPhones();
  }

}
