class ElectronicDevice {
    constructor() {
        this.screen = "";
        this.processor = "";
        this.battery = "";
        this.camera = "";
    }

    show() {
        console.log(`Screen: ${this.screen}`);
        console.log(`Processor: ${this.processor}`);
        console.log(`Battery: ${this.battery}`);
        console.log(`Camera: ${this.camera}`);
    }

}

//Abstract Builder
class ElectronicDeviceBuilder {
    constructor() {
        this.device = new ElectronicDevice();
    }

    buildScreen() { }
    buildProcessor() { }
    buildBattery() { }
    buildCamera() { }

    getResult() {
        return this.device;
    }
}


//Concrete implementation: Laptop Builder
class LaptopBuilder extends ElectronicDeviceBuilder {
    buildScreen() {
        this.device.screen = "15-inch Retina Display";
    }

    buildProcessor() {
        this.device.processor = 'Intel Core i7';
    }

    buildBattery() {
        this.device.battery = '8-hour Battery Life';
    }

    buildCamera() {
        this.device.camera = 'Built-in Webcam';
    }
}

//Concrete implementation: Smartphone Builder
class SmartphoneBuilder extends ElectronicDeviceBuilder {
    buildScreen() {
        this.device.screen = '6-inch OLED Display';
    }

    buildProcessor() {
        this.device.processor = 'Snapdragon 855';
    }

    buildBattery() {
        this.device.battery = '4000mAh Battery';
    }

    buildCamera() {
        this.device.camera = 'Dual Rear Cameras';
    }
}

// Director
class ElectronicDeviceDirector {
    construct(builder) {
        builder.buildScreen();
        builder.buildProcessor();
        builder.buildBattery();
        builder.buildCamera();
    }
}

const laptopBuilder = new LaptopBuilder();
const smartphoneBuilder = new SmartphoneBuilder();
const electronicDeviceBuilder = new ElectronicDeviceDirector();

electronicDeviceBuilder.construct(laptopBuilder);
const laptop = laptopBuilder.getResult();
console.log("Laptop:")
laptop.show();


electronicDeviceBuilder.construct(smartphoneBuilder);
const smartphone = smartphoneBuilder.getResult();
console.log('\nSmartphone:');
smartphone.show();