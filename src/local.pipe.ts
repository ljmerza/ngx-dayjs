import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

const dayjsConstructor = dayjs;

@Pipe({ name: 'amLocal' })
export class LocalTimePipe implements PipeTransform {
    transform(value: Date | dayjs.Dayjs | string | number): dayjs.Dayjs {
        return dayjsConstructor(value).local();
    }
}
