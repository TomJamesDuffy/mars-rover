import promptSync from 'prompt-sync';

import createRobot from './robot-creator';
import formatRobotInput from './robot-input-formatter';
import createLog from '../logs/log-creator';
import isValidRobotInput from './robot-input-validator';

const prompt = promptSync({ sigint: true });

const deployRobot = (world) => {
  const inputRobotPosition = prompt('E.g "(2, 3, E) LFRFF". ');

  const { instructions, xAxis, yAxis, orientation } = formatRobotInput(inputRobotPosition) || {};
  if (!isValidRobotInput(instructions, xAxis, yAxis, orientation)) {
    createLog('deployAnotherRobot');
    return;
  }

  const robot = createRobot();
  if (!robot) return;

  robot.tracking.setPosition(xAxis, yAxis, orientation);
  robot.navigation.setInstructions(instructions);

  world.deploy(robot);

  return robot;
};

export default deployRobot;
