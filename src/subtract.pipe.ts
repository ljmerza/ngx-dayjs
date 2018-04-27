/* ngx-dayjs (c) 2015, 2016 Uri Shaked / MIT Licence */

import {Pipe, PipeTransform} from '@angular/core';
import * as dayjs from 'dayjs';

const dayjsConstructor = dayjs;

@Pipe({ name: 'amSubtract' })
export class SubtractPipe implements PipeTransform {
    transform(value: any, amount: dayjs.DurationInputArg1, unit?: dayjs.DurationInputArg2): any {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('SubtractPipe: missing required arguments');
        }
        return dayjsConstructor(value).subtract(amount, unit);
    }
}
