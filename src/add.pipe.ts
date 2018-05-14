import {Pipe, PipeTransform} from '@angular/core';
import dayjs from 'dayjs';
const dayjsConstructor = dayjs;

@Pipe({ name: 'amAdd' })
export class AddPipe implements PipeTransform {
    transform(value: any, amount: any, unit?: any): any {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('AddPipe: missing required arguments');
        }
        return dayjsConstructor(value).add(amount, unit);
    }
}
