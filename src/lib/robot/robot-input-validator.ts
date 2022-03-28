import validateInstructions from './instruction-validator';

const orientationCommands = ['N', 'S', 'E', 'W'];
const instructionCommands = ['L', 'R', 'F'];

const isValidRobotInput = (
  instructions: string,
  xAxis: number,
  yAxis: number,
  orientation: string
) => {
  if (!instructions || instructions.length === 0) return;

  const splitInstructions = instructions && instructions.split('');

  return !(
    isNaN(xAxis) ||
    isNaN(yAxis) ||
    !orientationCommands.includes(orientation) ||
    !validateInstructions(instructionCommands, splitInstructions)
  );
};

export default isValidRobotInput;
