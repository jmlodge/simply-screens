import { Component, OnInit } from '@angular/core';
import { ContactClass } from '../contact-class';
import { ContentService } from '../shared/service/content.service';

@Component({
  selector: 'app-contact-from',
  templateUrl: './contact-from.component.html',
  styleUrls: ['./contact-from.component.css'],
})
export class ContactFromComponent implements OnInit {
  contactObj: object;
  brands = ['Apple', 'Samsung', 'Google', 'HTC'];
  model = new ContactClass(1, 'Joseph', 'Lodge', '6 Carolan Ct', 'Huddersfield', 'HD7 4NA', 7809231190,
    'josephmartinlodge@gmail.com', this.brands[2], 'Message', 'Golcar');
  submitted = false;
  onSubmit() { this.submitted = true; }
  newContact() {
    this.model = new ContactClass(42, '', '', '', '', '', +44, '', '', '');
  }
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contactObj = this.contentService.Objs['contact'];
  }
}

