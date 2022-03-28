import createLog from '../logs/log-creator';

const determineRobotsLocation = (world) => {
  const robots = world.robots;

  robots.forEach((robot) => {
    const { tracking, navigation } = robot || {};
    const instructions = navigation.instructions;
    const arrayOfInstructions = instructions.split('');

    arrayOfInstructions.every((instruction) => {
      const {
        positionXAxis: previousXAxis,
        positionYAxis: previousYAxis,
        orientation: previousOrientation
      } = tracking || {};

      const { xAxis: currentXAxis, yAxis: currentYAxis } = robot.navigation.navigate(
        instruction,
        tracking
      );

      if (!world.isValidPosition(currentXAxis, currentYAxis)) {
        createLog('lastPositionForInvalid', previousXAxis, previousYAxis, previousOrientation);
        return false;
      }

      return true;
    });

    const { positionXAxis, positionYAxis, orientation } = tracking || {};

    if (world.isValidPosition(positionXAxis, positionYAxis)) {
      return createLog('validNewPosition', positionXAxis, positionYAxis, orientation);
    }
  });
};

export default determineRobotsLocation;
