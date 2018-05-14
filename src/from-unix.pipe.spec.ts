import * as dayjs from 'dayjs';
const dayjsConstructor = dayjs;
import {FromUnixPipe} from './from-unix.pipe';

describe('FromUnixPipe', () => {
  describe('#transform', () => {
    it('should parse a unix timestamp number to dayjs', () => {
      const pipe = new FromUnixPipe();
      const result = pipe.transform(1456263980);
      expect(result).toEqual(dayjsConstructor(1456263980).unix());
    });

    it('should parse a unix timestamp string to dayjs', () => {
      const pipe = new FromUnixPipe();
      const result = pipe.transform('1456263980');
      expect(result).toEqual(dayjsConstructor(1456263980).unix());
    });
  });
});
