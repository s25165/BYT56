import { TrafficLightState } from "./template.js";
  class RedState extends TrafficLightState {
    transition() {
      this.trafficLight.setState(this.trafficLight.greenState);
    }
  
    display() {
      console.log('Red');
    }

  }
  
  class GreenState extends TrafficLightState {
    transition() {
      this.trafficLight.setState(this.trafficLight.yellowState);
    }
  
    display() {
      console.log('Green');
    }

  }
  
  class YellowState extends TrafficLightState {
    transition() {
      this.trafficLight.setState(this.trafficLight.redState);
    }
  
    display() {
      console.log('Yellow');
    }

  }
  

  class TrafficLight {
    constructor() {
      this.redState = new RedState(this);
      this.greenState = new GreenState(this);
      this.yellowState = new YellowState(this);
      this.currentState = this.redState;
    }
  
    setState(newState) {
      this.currentState = newState;
    }
  
    runTrafficLightCycle() {
      setInterval(() => {
        this.currentState.display();
        this.currentState.transition();
      }, 2000);
    }
  }
  
  const trafficLight = new TrafficLight();
  trafficLight.runTrafficLightCycle();