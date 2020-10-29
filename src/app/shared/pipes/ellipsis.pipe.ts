import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, textLength: number): unknown {
    if (textLength === undefined) {
      return value;
    }

    if (value.length > textLength) {
      return value.substring(0, textLength) + '...';
    } else {
      return value;
    }
  }
}
