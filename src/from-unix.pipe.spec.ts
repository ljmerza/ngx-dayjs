import {FromUnixPipe} from './from-unix.pipe';
import * as dayjs_ from 'dayjs';
const dayjs = dayjs_;

describe('FromUnixPipe', () => {
  describe('#transform', () => {
    it('should parse a unix timestamp number to dayjs', () => {
      const pipe = new FromUnixPipe();
      const result = pipe.transform(1456263980);
      expect(result).toEqual(dayjs(1456263980).unix());
    });

    it('should parse a unix timestamp string to dayjs', () => {
      const pipe = new FromUnixPipe();
      const result = pipe.transform('1456263980');
      expect(result).toEqual(dayjs(1456263980).unix());
    });
  });
});
