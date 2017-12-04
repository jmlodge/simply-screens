import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(phones: any, term: any): any {
    // check if undefined
    if (term === null) {
      return phones;
    }
    // return updated phones array
    return phones.filter(function (phone) {
      return phone.name.toLowerCase().includes(term.toLowerCase());
    });
  }

}
