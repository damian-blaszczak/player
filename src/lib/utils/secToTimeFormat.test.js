import secToTimeFormat from './secToTimeFormat';

describe('secToTimeFormat', () => {
  it('should return correct value (HH:MM:SS)', () => {
      const result = secToTimeFormat(123456);
      expect(result).toBe('34:17:36');
    });

  it('should return correct value (MM:SS)', () => {
    const result = secToTimeFormat(1234);
    expect(result).toBe('20:34');
  });

  it('should return correct value (MM:SS) with "0" at the beginning when hours, minutes and seconds are one digit', () => {
    const result = secToTimeFormat(11105);
    expect(result).toBe('03:05:05');
  });
});
