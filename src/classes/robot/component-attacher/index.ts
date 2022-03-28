import NavigationComponent from '../components/navigation';
import TrackingComponent from '../components/tracking';

interface Constructable<T> {
  new (...args: any): T;
}

interface robotInterface {
  [key: string]: any;
}

interface componentMapInterface {
  tracking: Constructable<TrackingComponent>;
  navigation: Constructable<NavigationComponent>;
}

const componentMapper: componentMapInterface = {
  tracking: TrackingComponent,
  navigation: NavigationComponent
};

class ComponentAttacher {
  attach(robot: robotInterface, components: string[]) {
    components.forEach((component) => {
      const Component = componentMapper[component as keyof componentMapInterface];
      robot[component] = new Component();
    });
  }
}

export default ComponentAttacher;
