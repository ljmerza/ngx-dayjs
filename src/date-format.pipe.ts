import {Pipe, PipeTransform} from '@angular/core';
import dayjs from 'dayjs';

const dayjsConstructor = dayjs;

@Pipe({ name: 'amDateFormat' })
export class DateFormatPipe implements PipeTransform {
  transform(value: any, ...args: any[]): string {
    if (!value) { return ''; }
    return dayjsConstructor(value).format(args[0]);
  }
}
