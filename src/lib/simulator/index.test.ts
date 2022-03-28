import promptSync from 'prompt-sync';

import simulator from '.';

jest.mock(
  'prompt-sync',
  () => {
    const prompt = jest.fn();
    return jest.fn(() => prompt);
  },
  { virtual: true }
);

describe('Simulator', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should log the appropriate robot ouput statements based on example 1', () => {
    const log = jest.spyOn(console, 'log').mockImplementation(() => ({}));
    const prompt = promptSync();

    prompt
      .mockReturnValueOnce('4 8')
      .mockReturnValueOnce('(2, 3, E) LFRFF')
      .mockReturnValueOnce('D')
      .mockReturnValueOnce('(0, 2, N) FFLFRFF')
      .mockReturnValueOnce('F');

    simulator();

    expect(log).toBeCalledWith('(4, 4, E)');
    expect(log).toBeCalledWith('(0, 4, W) LOST');
  });

  it('should log the appropriate robot ouput statements based on example 2', () => {
    const log = jest.spyOn(console, 'log').mockImplementation(() => ({}));
    const prompt = promptSync();

    prompt
      .mockReturnValueOnce('4 8')
      .mockReturnValueOnce('(2, 3, N) FLLFR')
      .mockReturnValueOnce('D')
      .mockReturnValueOnce('(1, 0, S) FFRLF')
      .mockReturnValueOnce('F');

    simulator();

    expect(log).toBeCalledWith('(2, 3, W)');
    expect(log).toBeCalledWith('(1, 0, S) LOST');
  });

  it('should log the appropriate robot ouput statements based on non-standard inputs', () => {
    const log = jest.spyOn(console, 'log').mockImplementation(() => ({}));
    const prompt = promptSync();

    prompt
      .mockReturnValueOnce('boil em')
      .mockReturnValueOnce('4 8')
      .mockReturnValueOnce('mash em')
      .mockReturnValueOnce('(2, 3, N) FLLFR')
      .mockReturnValueOnce('stick em in a stew')
      .mockReturnValueOnce('D')
      .mockReturnValueOnce('(1, 0, S) FFRLF')
      .mockReturnValueOnce('F');

    simulator();

    expect(log).toBeCalledWith('(2, 3, W)');
    expect(log).toBeCalledWith('(1, 0, S) LOST');
  });
});
