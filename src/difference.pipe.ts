import {Pipe, PipeTransform} from '@angular/core';
import * as dayjs from 'dayjs';
const dayjsConstructor = dayjs;

@Pipe({ name: 'amDifference' })
export class DifferencePipe implements PipeTransform {
  transform(value: Date | dayjs.Dayjs,
            otherValue: Date | dayjs.Dayjs,
            unit?: dayjs.unitOfTime.Diff,
            precision?: boolean): number {

    const date = dayjsConstructor(value);
    const date2 = (otherValue !== null) ? dayjsConstructor(otherValue) : dayjsConstructor();

    return date.diff(date2, unit, precision);
  }
}
