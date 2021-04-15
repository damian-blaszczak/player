import once from './once';

describe('once function', () => {
  let mock;
  let mockOnce;
  let result1;
  let result2;

  beforeAll(() => {
    mock = jest.fn().mockReturnValueOnce('result');

    mockOnce = once(mock);
    result1 = mockOnce('1', 2, null);
    result2 = mockOnce('ignored', 'args');
  });

  it('should call function only once', () => {
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it('should be called with same arguments', () => {
    expect(mock).toHaveBeenCalledWith('1', 2, null);
  });

  it('should return same value as given function', () => {
    expect(result1).toBe('result');
  });

  it('should return same result every time', () => {
    expect(Object.is(result1, result2)).toBe(true);
  });
});
