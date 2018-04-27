import * as dayjs from 'dayjs';
import { DateFormatPipe } from './date-format.pipe';
import { LocalTimePipe } from './local.pipe';

describe('LocalPipe', () => {

  describe('#transform', () => {

    let localPipe: LocalTimePipe;

    beforeEach(() => {
      localPipe = new LocalTimePipe();
    });

    it('should output an invalid momemt object for a null input', () => {
      const localDate = localPipe.transform(null);
      expect(localDate).toEqual(jasmine.any(dayjs));
      expect(localDate.isValid()).toBe(false);
    });

    it('should output a dayjs object for a dayjs input', () => {
      const dayjsDate = dayjs();
      const localDate = localPipe.transform(dayjsDate);
      expect(localDate).toEqual(jasmine.any(dayjs));
      expect(localDate.isValid()).toBe(true);
    });

    it('should output a dayjs object for a date input', () => {
      const date = new Date();
      const localDate = localPipe.transform(date);
      expect(localDate).toEqual(jasmine.any(dayjs));
      expect(localDate.isValid()).toBe(true);
    });

    it('should output a dayjs object for a string date', () => {
      const dateString = '2016-01-01';
      const localDate = localPipe.transform(dateString);
      expect(localDate).toEqual(jasmine.any(dayjs));
      expect(localDate.isValid()).toBe(true);
    });

    it('should output a dayjs object for a timestamp', () => {
      const timestamp: number = Date.now();
      const localDate = localPipe.transform(timestamp);
      expect(localDate).toEqual(jasmine.any(dayjs));
      expect(localDate.isValid()).toBe(true);
    });

    it('should be pipeable to amDateFormat', () => {
      const amDateFormat = new DateFormatPipe();
      const datetimeString = '2015-12-31T23:00:00.000-15:00';
      const dayjsFormatString = 'YYYY-MM';
      const localOutput = localPipe.transform(datetimeString);
      expect(amDateFormat.transform(localOutput, dayjsFormatString)).toEqual('2016-01');
    });

  });

});
