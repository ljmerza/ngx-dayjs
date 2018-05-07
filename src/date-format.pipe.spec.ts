import * as dayjs from 'dayjs';
import {DateFormatPipe} from './date-format.pipe';

describe('DateFormatPipe', () => {
  describe('#transform', () => {
    it('should properly format a date', () => {
      const pipe = new DateFormatPipe();
      const result = pipe.transform('2016-01-24 01:23:45', 'MMMM D YYYY, h:mm:ss');
      expect(result).toBe('January 24 2016, 1:23:45');
    });
  });
});
