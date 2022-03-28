import ComponentAttacher from './component-attacher';

class Robot {
  tracking: any;
  navigation: any;

  constructor(components: string[]) {
    this.tracking = null;
    this.navigation = null;

    const attacher = new ComponentAttacher();
    attacher.attach(this, components);
  }
}

export default Robot;
