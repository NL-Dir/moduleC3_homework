function Device (name, power) {
    this.name = name;
    this.power = power;
    this.isOn = false;
}

Device.prototype.turnOn = function() {
    this.isOn = true;
    console.log(this.name + " is now On")
};

Device.prototype.turnOff = function() {
    this.isOn = false;
    console.log(this.name + " is now Off")
};

function Toaster (name, power, brand, colour) {
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.colour = colour;
    this.isOn = false;
}

function Fridge (name, power, brand, volume) {
    this.name = name;
    this.power = power;
    this.brand = brand;
    this. volume = volume;
    this.isOn = true;
}

Toaster.prototype = new Device();
Fridge.prototype = new Device();

const myToaster = new Toaster ("my toaster", 2000, "Bosch", "white")
const myFridge = new Fridge ("my fridge", 400, "AEG", 250)

myFridge.turnOff();
myToaster.turnOn();

console.log(myFridge)
console.log(myToaster)
