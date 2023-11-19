export class TrafficLightState {
    constructor(trafficLight) {
      this.trafficLight = trafficLight;
    }
  
    transition() {
      throw new Error('Transition method must be implemented.');
    }
  
    display() {
      throw new Error('Display method must be implemented.');
    }
  }

