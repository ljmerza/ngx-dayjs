import * as dayjs from 'dayjs';
import { DateFormatPipe } from './date-format.pipe';
import { LocalePipe } from './locale.pipe';

describe('LocalePipe', () => {

  describe('#transform', () => {

    let localePipe: LocalePipe;

    beforeEach(() => {
      localePipe = new LocalePipe();
    });

    it('should output a dayjs object for a string date', () => {
      const datetimeString = '2016-01-24 01:23:45';
      const langKeyString1 = 'en';
      const langKeyString2 = 'de';
      const parseddayjs1 = localePipe.transform(datetimeString, langKeyString1);
      const parseddayjs2 = localePipe.transform(datetimeString, langKeyString2);
      expect(parseddayjs1).toEqual(expect.any(dayjs));
      expect(parseddayjs2).toEqual(expect.any(dayjs));
      expect(parseddayjs1.isValid()).toBe(true);
      expect(parseddayjs2.isValid()).toBe(true);
    });

    it('should be pipeable to amDateFormat', () => {
      const amDateFormat = new DateFormatPipe();
      const datetimeString = '2016-01-24 14:23:45';
      const langKeyString1 = 'en';
      const langKeyString2 = 'de';
      const dayjsFormatString1 = 'MMMM Do YYYY, h:mm:ss a';
      const dayjsFormatString2 = 'MMMM Do YYYY, HH:mm:ss';
      const parseOutput1 = localePipe.transform(datetimeString, langKeyString1);
      const parseOutput2 = localePipe.transform(datetimeString, langKeyString2);
      expect(amDateFormat.transform(parseOutput1, dayjsFormatString1)).toEqual('January 24th 2016, 2:23:45 pm');
      expect(amDateFormat.transform(parseOutput2, dayjsFormatString2)).toEqual('Januar 24. 2016, 14:23:45');
    });

  });

});
