const logMap = (inputOne, inputTwo, inputThree) => ({
  worldCreated: `World has been created with a width of ${inputOne} and a height of ${inputTwo}.`,
  inviteRobotCreation: 'Where do you want your robot positioned and how do you want them to move?',
  deployAnotherRobot: 'Somethings gone wrong lets try and deploy another robot!',
  couldNotDeploy: `Could not deploy robot, co-ordinates at ${inputOne}, ${inputTwo} do not exist.`,
  lastPositionForInvalid: `(${inputOne}, ${inputTwo}, ${inputThree}) LOST`,
  validNewPosition: `(${inputOne}, ${inputTwo}, ${inputThree})`,
  tryAgain: 'Somethings gone wrong lets try again!'
});

const defaultErrorText = 'Something has gone horribly wrong';

const createLog = (
  key?: string,
  inputOne?: string | number,
  inputTwo?: string | number,
  inputThree?: string | number
) => {
  console.log(logMap(inputOne, inputTwo, inputThree)[key] || defaultErrorText);
};

export default createLog;
