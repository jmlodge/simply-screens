import {Component, OnInit, TemplateRef} from '@angular/core';
import { PhoneClass } from '../phone';
import { PhoneService } from '../shared/service/phone.service';
import { BsModalRef, BsModalService} from 'ngx-bootstrap';
import { ContentService } from '../shared/service/content.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  public modalRef: BsModalRef;
  phones: PhoneClass [];
  serviceObj: Object;

  getPhones(): void {
    this.phoneService.getPhones()
      .subscribe(phones => this.phones = phones);
  }

  constructor(private phoneService: PhoneService,
              private modalService: BsModalService,
              private contentService: ContentService) {
  }
  public openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.getPhones();
    this.serviceObj = this.contentService.Objs['home'];
  }
}
