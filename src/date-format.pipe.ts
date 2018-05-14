import {Pipe, PipeTransform} from '@angular/core';
import * as dayjs_ from 'dayjs';
const dayjs = dayjs_;

@Pipe({ name: 'amDateFormat' })
export class DateFormatPipe implements PipeTransform {
  transform(value: any, ...args: any[]): string {
    if (!value) { return ''; }
    return dayjs(value).format(args[0]);
  }
}
