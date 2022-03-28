import createLog from '../../../../lib/logs/log-creator';

class NavigationComponent {
  orientations: string[];
  instructions: string;

  constructor() {
    this.orientations = ['N', 'E', 'S', 'W'];
  }

  setInstructions(instructions: string) {
    this.instructions = instructions;
  }

  moveForward(orientation: string, positionXAxis: number, positionYAxis: number) {
    switch (orientation) {
      case 'N':
        return { positionYAxis: positionYAxis + 1, positionXAxis };
      case 'E':
        return { positionXAxis: positionXAxis + 1, positionYAxis };
      case 'S':
        return { positionYAxis: positionYAxis - 1, positionXAxis };
      case 'W':
        return { positionXAxis: positionXAxis - 1, positionYAxis };
      default:
        createLog();
    }
  }

  navigate(instruction: string, tracking) {
    const { positionXAxis, positionYAxis, orientation } = tracking || {};

    switch (instruction) {
      case 'L': {
        const updatedOrientation = this.rotate(orientation, 'l');
        tracking.setPosition(positionXAxis, positionYAxis, updatedOrientation);
        break;
      }
      case 'R': {
        const updatedOrientation = this.rotate(orientation, 'r');
        tracking.setPosition(positionXAxis, positionYAxis, updatedOrientation);
        break;
      }
      case 'F': {
        const updatedPosition = this.moveForward(orientation, positionXAxis, positionYAxis);

        tracking.setPosition(
          updatedPosition.positionXAxis,
          updatedPosition.positionYAxis,
          orientation
        );
        break;
      }
      default:
        createLog();
    }

    return {
      xAxis: tracking.positionXAxis,
      yAxis: tracking.positionYAxis,
      orientation: tracking.orientation
    };
  }

  normaliseIndex(index: number) {
    if (index >= 0) {
      return index % 4;
    }

    return index + this.orientations.length;
  }

  retrieveOrientationIndex(orientation: string) {
    return this.orientations.indexOf(orientation);
  }

  rotate(orientation: string, direction: string) {
    const index = this.retrieveOrientationIndex(orientation);
    const updatedIndex = direction === 'r' ? index + 1 : index - 1;
    const normalisedIndex = this.normaliseIndex(updatedIndex);
    return this.orientations[normalisedIndex];
  }
}

export default NavigationComponent;
