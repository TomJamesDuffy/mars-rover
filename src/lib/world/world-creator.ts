import World from '../../classes/world';
import createLog from '../logs/log-creator';
import formatWorldInput from './world-input-formatter';
import isValidWorldInput from './world-input-validator';

const createWorld = (input: string) => {
  const { width, height } = formatWorldInput(input) || {};

  if (!isValidWorldInput(width, height)) {
    createLog('tryAgain');
    return;
  }

  const world = new World(width, height);
  createLog('worldCreated', width, height);

  return world;
};

export default createWorld;
