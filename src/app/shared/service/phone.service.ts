import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { PhoneClass } from '../../phone';
import { PHONES } from '../../phones/phone-list';

@Injectable()
export class PhoneService {
  getPhones(): Observable<PhoneClass[]> {
    return of (PHONES);
  }
  constructor() { }

}