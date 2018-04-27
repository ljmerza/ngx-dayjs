import {Pipe, PipeTransform} from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({ name: 'amFromUtc' })
export class FromUtcPipe implements PipeTransform {
  transform(value: any, ...args: string[]): any {
    return dayjs.utc(value);
  }
}
