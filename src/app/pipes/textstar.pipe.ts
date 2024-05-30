import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textstar',
  standalone: true
})
export class TextstarPipe implements PipeTransform {

  transform(value: number): string {
    return value + ' sao';
  }

}
