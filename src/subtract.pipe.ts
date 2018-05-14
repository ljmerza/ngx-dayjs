import {Pipe, PipeTransform} from '@angular/core';
import dayjs from 'dayjs';

const dayjsConstructor = dayjs;

@Pipe({ name: 'amSubtract' })
export class SubtractPipe implements PipeTransform {
    transform(value: any, amount: any, unit?: any): any {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('SubtractPipe: missing required arguments');
        }
        return dayjsConstructor(value).subtract(amount, unit);
    }
}