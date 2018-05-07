import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

const dayjsConstructor = dayjs;

@Pipe({ name: 'amParse' })
export class ParsePipe implements PipeTransform {
  transform(value: string, format: string): dayjs.dayjs {
    return dayjsConstructor(value).format(format);
  }
}
