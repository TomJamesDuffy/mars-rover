import NavigationComponent from '.';

const practiceNavigationComponent = new NavigationComponent();

describe('Navigation component', () => {
  it('should return the new position on moving forward facing north', () => {
    const result = practiceNavigationComponent.moveForward('N', 2, 3);
    expect(result.positionXAxis).toBe(2);
    expect(result.positionYAxis).toBe(4);
  });

  it('should return the new position on moving forward facing east', () => {
    const result = practiceNavigationComponent.moveForward('E', 2, 3);
    expect(result.positionXAxis).toBe(3);
    expect(result.positionYAxis).toBe(3);
  });

  it('should return the new position on moving forward facing south', () => {
    const result = practiceNavigationComponent.moveForward('S', 2, 3);
    expect(result.positionXAxis).toBe(2);
    expect(result.positionYAxis).toBe(2);
  });

  it('should return the new position on moving forward facing west', () => {
    const result = practiceNavigationComponent.moveForward('W', 2, 3);
    expect(result.positionXAxis).toBe(1);
    expect(result.positionYAxis).toBe(3);
  });
});
