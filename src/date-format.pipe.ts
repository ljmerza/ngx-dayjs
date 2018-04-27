import {Pipe, PipeTransform} from '@angular/core';
import * as dayjs from 'dayjs';

const dayjsConstructor = dayjs;

@Pipe({ name: 'amDateFormat' })
export class DateFormatPipe implements PipeTransform {
  transform(value: Date | dayjs.Dayjs | string | number, ...args: any[]): string {
    if (!value) { return ''; }
    return dayjsConstructor(value).format(args[0]);
  }
}
