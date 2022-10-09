//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle

class Car extends VehicleModule{
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num){
        if(this.num < this.maxPassengers){
            return this.passenger+num;
        }
        else{
            return console.log("no room for new passenger");
        }
    }
    start(){
        if(this.fuel>0){
            return this.started=true;
        }
    }
    scheduleService(mileage){
        if(this.mileage>30000){
            return this.scheduleService = true;
        }
    }
}




//this shows how to call from this module...
let v = new Car("Mecury", "Sedan", "1965", "red", "29000");
console.log(v.make)


