import determineRobotsLocation from './robots-location-determiner';
import Robot from '../../classes/robot';
import World from '../../classes/world';

const practiceRobot = new Robot(['navigation', 'tracking']);
practiceRobot.navigation.instructions = 'FFLR';
practiceRobot.tracking.setPosition(5, 5, 'N');

const practiceRobotTwo = new Robot(['navigation', 'tracking']);
practiceRobotTwo.navigation.instructions = 'LLFFF';
practiceRobotTwo.tracking.setPosition(5, 5, 'N');

const pluto = new World(10, 10);

pluto.robots = [practiceRobot, practiceRobotTwo];

describe('Determine robots location', () => {
  it('should log the location of the worlds robots', () => {
    const log = jest.spyOn(console, 'log').mockImplementation(() => ({}));
    determineRobotsLocation(pluto);
    expect(log).toBeCalledWith('(5, 7, N)');
    expect(log).toBeCalledWith('(5, 2, S)');
  });
});
