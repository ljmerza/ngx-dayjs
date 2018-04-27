import {Pipe, PipeTransform} from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({ name: 'amDuration' })
export class DurationPipe implements PipeTransform {
  transform(value: any, ...args: string[]): string {
    if (typeof args === 'undefined' || args.length !== 1) {
      throw new Error('DurationPipe: missing required time unit argument');
    }
    return dayjs.duration(value, args[0] as dayjs.unitOfTime.DurationConstructor).humanize();
  }
}
