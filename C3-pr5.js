class Device {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isOn = false;
    }
    turnOn() {
        this.isOn = true;
        console.log(this.name + " is now On");
    }
    turnOff() {
        this.isOn = false;
        console.log(this.name + " is now Off");
    }
}



class Toaster extends Device {
    constructor (name, power, brand, colour) {
    super (name, power)
    this.brand = brand;
    this.colour = colour;
    this.isOn = false;
}
}

class Fridge extends Device {
    constructor (name, power, brand, volume) {
    super (name, power)
    this.brand = brand;
    this. volume = volume;
    this.isOn = true;
}
}

const myToaster = new Toaster ("my toaster", 2000, "Bosch", "white")
const myFridge = new Fridge ("my fridge", 400, "AEG", 250)

myFridge.turnOff();
myToaster.turnOn();

console.log(myFridge)
console.log(myToaster)
