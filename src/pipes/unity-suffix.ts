import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitySuffix'
})
export class UnitySuffix implements PipeTransform {

  public transform(value: any, type: string) {
    if (isNaN(value)) {
      return "";
    }

    if (value < 1000) {
      return value;
    }

    let exp = Math.floor(Math.log(value) / Math.log(1000));
    let suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];

    return (value / Math.pow(1000, exp)).toFixed(1) + suffixes[exp - 1];
  }
}