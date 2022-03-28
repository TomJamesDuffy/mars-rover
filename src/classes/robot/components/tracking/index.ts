class TrackingComponent {
  positionXAxis?: number;
  positionYAxis?: number;
  orientation?: string;

  setPosition(positionXAxis: number, positionYAxis: number, orientation: string) {
    this.positionXAxis = positionXAxis;
    this.positionYAxis = positionYAxis;
    this.orientation = orientation;
  }
}

export default TrackingComponent;
