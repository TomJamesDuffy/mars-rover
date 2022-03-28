import promptSync from 'prompt-sync';

import createWorld from '../world/world-creator';
import createLog from '../logs/log-creator';
import deployRobot from '../robot/robot-deployer';
import determineRobotsLocation from '../robot/robots-location-determiner';

const prompt = promptSync({ sigint: true });

const simulator = () => {
  let simulationOver = false;
  let creatingNewRobots = true;

  while (!simulationOver) {
    const inputWorldSize = prompt('Enter world size, e.g "4 8" for width 4 and height 8. ');

    const world = createWorld(inputWorldSize);
    if (!world) continue;

    while (creatingNewRobots) {
      const robotsOnWorld = world.robots.length;

      if (robotsOnWorld < 1) {
        createLog('inviteRobotCreation');
        const robot = deployRobot(world);
        if (!robot) continue;
      }

      if (robotsOnWorld >= 1) {
        const deployOrDetermineFinal = prompt(
          'Deploy a robot? (D) or, determine all robots Final location (F)? '
        );

        if (deployOrDetermineFinal === 'D') {
          const robot = deployRobot(world);
          if (!robot) continue;
        }

        if (deployOrDetermineFinal === 'F') {
          creatingNewRobots = false;
          simulationOver = true;
        }
      }
    }

    determineRobotsLocation(world);
  }
};

export default simulator;
