import {Pipe, PipeTransform} from '@angular/core';
import * as dayjs_ from 'dayjs';
const dayjs = dayjs_;

@Pipe({ name: 'amAdd' })
export class AddPipe implements PipeTransform {
    transform(value: any, amount: any, unit?: any): any {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('AddPipe: missing required arguments');
        }
        return dayjs(value).add(amount, unit);
    }
}
