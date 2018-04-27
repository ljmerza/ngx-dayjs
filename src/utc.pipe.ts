import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

const dayjsConstructor = dayjs;

@Pipe({ name: 'amUtc' })
export class UtcPipe implements PipeTransform {
  transform(value: Date | dayjs.Dayjs | string | number): dayjs.Dayjs {
    return dayjsConstructor(value).utc();
  }
}
