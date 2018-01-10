var myBike = {x: 10, y: 20};
var myCar = {x: 10, y: 20};


var myPedestrian = {x: 10, y: 20};
var bicycleAverageSpeed = 5;
var carAverageSpeed = 20;
var pedestrianAverageSpeed = 2;

var move = function (speed, vehicle) {
  vehicle.x = vehicle.x + speed * randomStep();
  vehicle.y = vehicle.y + speed * randomStep();
};

var step = function(speed, pedestrian){
    pedestrian.x = pedestrian.x + speed * randomStep();
    pedestrian.y = pedestrian.y + speed * randomStep();
};

// A helper function that randomly returns either -1 or 1
var randomStep = function () {
  if (Math.random() < 0.5) {
    return -1;
  } else {
    return 1;
  }
};

move(bicycleAverageSpeed, myBike);
move(carAverageSpeed, myCar);
step(pedestrianAverageSpeed, myPedestrian);

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

  var myCar = new Vehicle(100, 200, 10);

  myCar.move();


  var myNewBike = new Vehicle(0, 0, 5);
  myNewBike.move();
