import createLog from '../../lib/logs/log-creator';

class World {
  height: number;
  width: number;
  robots: any;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
    this.robots = [];
  }

  isValidPosition(xAxis: number, yAxis: number) {
    return xAxis <= this.width && xAxis >= 0 && yAxis <= this.height && yAxis >= 0;
  }

  deploy(robot: any) {
    const { tracking } = robot || {};
    const { positionXAxis, positionYAxis } = tracking || {};

    if (!this.isValidPosition(positionXAxis, positionYAxis)) {
      createLog('couldNotDeploy', positionXAxis, positionYAxis);
      return;
    }

    this.robots.push(robot);
  }
}

export default World;
