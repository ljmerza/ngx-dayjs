import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

// under systemjs, dayjs is actually exported as the default export, so we account for that
const dayjsConstructor = dayjs;

@Pipe({ name: 'amLocale' })
export class LocalePipe implements PipeTransform {
  transform(value: string, locale: string): dayjs.dayjs {
    return dayjsConstructor(value).locale(locale);
  }
}
