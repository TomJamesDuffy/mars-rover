const formatRobotInput = (input: string) => {
  const splitRobotInput = input && input.split(')');

  if (!splitRobotInput || splitRobotInput.length < 2) return;

  const startingPosition = splitRobotInput[0].replace('(', '').split(',');

  if (!startingPosition || startingPosition.length < 3) return;

  const instructions = splitRobotInput[1].trim();

  const xAxis = Number(startingPosition[0]);
  const yAxis = Number(startingPosition[1]);
  const orientation = startingPosition[2].trim();

  return { instructions, xAxis, yAxis, orientation };
};

export default formatRobotInput;
