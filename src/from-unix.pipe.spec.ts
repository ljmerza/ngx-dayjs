import * as dayjs from 'dayjs';
import {FromUnixPipe} from './from-unix.pipe';

describe('FromUnixPipe', () => {
  describe('#transform', () => {
    it('should parse a unix timestamp number to dayjs', () => {
      const pipe = new FromUnixPipe();
      const result = pipe.transform(1456263980);
      expect(result).toEqual(dayjs.unix(1456263980));
    });

    it('should parse a unix timestamp string to dayjs', () => {
      const pipe = new FromUnixPipe();
      const result = pipe.transform('1456263980');
      expect(result).toEqual(dayjs.unix(1456263980));
    });
  });
});
