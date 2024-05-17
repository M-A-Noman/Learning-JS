import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterString:string,propName:string) {
    if (value.length === 0 || filterString.length === 0)
        return value;
    const filteredResult = [];
    for (let item of value) {
      if (item[propName] === filterString) {
        filteredResult.push(item);
      }
    }
    return filteredResult;
  }

}
