import World from '.';

describe('World', () => {
  const mars = new World(10, 10);

  it('should be created', () => {
    expect(mars).toBeTruthy();
  });

  it('should be the height specified', () => {
    expect(mars.width).toBe(10);
  });

  it('should be the width specified', () => {
    expect(mars.height).toBe(10);
  });
});
