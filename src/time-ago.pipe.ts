/* ngx-dayjs (c) 2015, 2016 Uri Shaked / MIT Licence */

import {Pipe, ChangeDetectorRef, PipeTransform, OnDestroy, NgZone} from '@angular/core';
import * as dayjs from 'dayjs';

const dayjsConstructor = dayjs;

@Pipe({name: 'amTimeAgo', pure: false})
export class TimeAgoPipe implements PipeTransform, OnDestroy {
  private currentTimer: number;

  private lastTime: Number;
  private lastValue: Date | dayjs.Dayjs;
  private lastOmitSuffix: boolean;
  private lastLocale?: string;
  private lastText: string;

  constructor(private cdRef: ChangeDetectorRef, private ngZone: NgZone) {
  }

  transform(value: Date | dayjs.Dayjs, omitSuffix?: boolean): string {
    if (this.hasChanged(value, omitSuffix)) {
      this.lastTime = this.getTime(value);
      this.lastValue = value;
      this.lastOmitSuffix = omitSuffix;
      this.lastLocale = this.getLocale(value);
      this.removeTimer();
      this.createTimer();
      this.lastText = dayjsConstructor(value).from(dayjsConstructor(), omitSuffix);

    } else {
      this.createTimer();
    }

    return this.lastText;
  }

  ngOnDestroy(): void {
    this.removeTimer();
  }


  private createTimer() {
    if (this.currentTimer) {
      return;
    }
    const dayjsInstance = dayjsConstructor(this.lastValue);

    const timeToUpdate = this.getSecondsUntilUpdate(dayjsInstance) * 1000;
    this.currentTimer = this.ngZone.runOutsideAngular(() => {
      if (typeof window !== 'undefined') {
        return window.setTimeout(() => {
          this.lastText = dayjsConstructor(this.lastValue).from(dayjsConstructor(), this.lastOmitSuffix);

          this.currentTimer = null;
          this.ngZone.run(() => this.cdRef.markForCheck());
        }, timeToUpdate);
      }
    });
  }


  private removeTimer() {
    if (this.currentTimer) {
      window.clearTimeout(this.currentTimer);
      this.currentTimer = null;
    }
  }

  private getSecondsUntilUpdate(dayjsInstance: dayjs.dayjs) {
    const howOld = Math.abs(dayjsConstructor().diff(dayjsInstance, 'minute'));
    if (howOld < 1) {
      return 1;
    } else if (howOld < 60) {
      return 30;
    } else if (howOld < 180) {
      return 300;
    } else {
      return 3600;
    }
  }

  private hasChanged(value: Date | dayjs.dayjs, omitSuffix?: boolean) {
    return this.getTime(value) !== this.lastTime
      || this.getLocale(value) !== this.lastLocale
      || omitSuffix !== this.lastOmitSuffix;
  }

  private getTime(value: Date | dayjs.dayjs) {
    if (dayjs.isDate(value)) {
      return value.getTime();
    } else if (dayjs.isdayjs(value)) {
      return value.valueOf();
    } else {
      return dayjsConstructor(value).valueOf();
    }
  }

  private getLocale(value: Date | dayjs.dayjs): string {
    return dayjs.isdayjs(value) ? value.locale() : null;
  }
}
