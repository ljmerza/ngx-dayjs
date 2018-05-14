import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs_ from 'dayjs';
const dayjs = dayjs_;

@Pipe({ name: 'amParse' })
export class ParsePipe implements PipeTransform {
  transform(value: string, format: string): any {
    return dayjs(value).format(format);
  }
}
