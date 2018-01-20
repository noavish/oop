var Vehicle = function (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  };
  
  Vehicle.prototype.move = function() {
    this.x = this.x + this.speed * this.randomStep();
    this.y = this.y + this.speed * this.randomStep();
  
  }
  
  Vehicle.prototype.randomStep = function() {
    if (Math.random() < 0.5) {
      return -1;
    } else {
      return 1;
    }
  }


var MotorVehicle = function (x, y, speed, gas) {
    this.gas = gas;
    Vehicle.call(this, x, y, speed);
  }
  MotorVehicle.prototype = Object.create(Vehicle.prototype);
  MotorVehicle.prototype.move = function () {
    Object.getPrototypeOf(MotorVehicle.prototype).move.call(this);
    this.gas--;
}


var Car = function (x, y, gas) {
      MotorVehicle.call(this, x, y, 5, gas);
    }
    Car.prototype = Object.create(MotorVehicle.prototype);
    Car.prototype.honk = function () {
      console.log("Beep! Beep!");
    }
    
    var myCar = new Car(0,0)
    myCar.move() 
    myCar.honk() 

var Airplane = function (x, y, gas) {
  Airplane.prototype.altitude = 0;
  MotorVehicle.call(this, x, y, 20, gas);
}
Airplane.prototype = object.create(MotorVehicle.prototype);
Airplane.prototype.takeOff = function () {
  this.altitude++;
}
Airplane.prototype.landing = function () {
  this.altitude--;
}

var fastCar = function(x, y, gas) {
  car.call(this, x, y, 5, gas);
}
fastCar.prototype = object.create(car.prototype);
fastCar.prototype.randomStep = function() {
  object.getPrototypeOf(fastCar.prototype).randomStep.call(this);
  object.getPrototypeOf(fastCar.prototype).randomStep.call(this);  
}

var raceCar = function(x, y, gas) {
  fastCar.call(this, x, y, 5, gas);
}
raceCar.prototype = object.create(fastCar.prototype);
raceCar.prototype.randomStep = function() {
  object.getPrototypeOf(raceCar.prototype).randomStep.call(this);
  object.getPrototypeOf(raceCar.prototype).randomStep.call(this);  
}

var Bicycle = function (x, y) {
    Vehicle.call(this, x, y, 2);
    }
    Bicycle.prototype.Object.create(Vehicle.prototype);
    Bicycle.prototype.honk = function () {
        console.log("honk");
    }

    var myBicycle = new Bicycle(0, 0);
    myBicycle.move();
    myBicycle.honk();


var AngryBicycle = function(x, y) {
  Bicycle.call(this, x, y);
}
AngryBicycle.prototype = Object.create(Bicycle.prototype);
AngryBicycle.prototype.honk = function () {
    Object.getPrototypeOf(AngryBicycle.prototype).honk.call(this);
    Object.getPrototypeOf(AngryBicycle.prototype).honk.call(this);
  }
  
  var ab = new AngryBicycle(0, 0);
  ab.honk();





