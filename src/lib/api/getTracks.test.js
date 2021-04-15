import { getTracks } from './getTracks';

jest.mock('./getTracks');

const mockedData = [
  {name: 'track1'},
  {name: 'track2'},
  {name: 'track3'},
];

describe('getTracks', () => {
  it('should been called and return data', () => {
    getTracks.mockResolvedValue(mockedData);

    const result = getTracks();

    expect(getTracks).toHaveBeenCalledTimes(1);
    expect(result).resolves.toBe(mockedData);
  });
});
