import {Pipe, PipeTransform} from '@angular/core';
import * as dayjs_ from 'dayjs';
const dayjs = dayjs_;

@Pipe({ name: 'amDifference' })
export class DifferencePipe implements PipeTransform {
  transform(value: any, otherValue: any,  unit?: any, precision?: boolean): number {

    const date = dayjs(value);
    const date2 = (otherValue !== null) ? dayjs(otherValue) : dayjs();

    return date.diff(date2, unit, precision);
  }
}
