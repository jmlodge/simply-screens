import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { PhoneClass } from '../../phone';
import { PHONES } from './phone-list';

@Injectable()
export class PhoneService {
  getPhones(): Observable<PhoneClass[]> {
    return of (PHONES);
  }
  getPhone(id: number): Observable<PhoneClass> {
    return of (PHONES.find(phone => phone.id === id));
  }
  constructor() { }

}
