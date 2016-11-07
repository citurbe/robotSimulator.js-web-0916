'use strict';

function Robot() {
  // implement your solution here!
  this.coordinates = [0,0]
  this.bearing = 'north'
  this.directions = ['north', 'east', 'south', 'west']
}

Robot.prototype.orient = function(direction) {

  if(this.directions.includes(direction)){
    this.bearing = direction
  } else {
    throw new Error('Invalid Robot Bearing')
  }
}

Robot.prototype.at = function(x, y) {
  this.coordinates = [x,y]
}

Robot.prototype.turnRight = function(){
  var dirValue = this.directions.indexOf(this.bearing)
  if (dirValue === 3){
    this.bearing = 'north'
  } else {
    this.bearing = this.directions[dirValue+1]
  }
}

Robot.prototype.turnLeft = function(){
  var dirValue = this.directions.indexOf(this.bearing)
  if (dirValue === 0){
    this.bearing = 'west'
  } else {
    this.bearing = this.directions[dirValue-1]
  }
}

Robot.prototype.advance = function() {
  switch(this.bearing) {
    case 'north':
      this.coordinates[1]++
      break;
    case 'south':
      this.coordinates[1]--
      break;
    case 'east':
      this.coordinates[0]++
      break;
    case 'west':
      this.coordinates[0]--
      break;
  }
}

Robot.prototype.instructions = function(inst) {
  const translate = {R:'turnRight', L:'turnLeft', A:'advance'}
  var instructions = inst.split('');
  return instructions.map(function(element){
    return translate[element]
  })
}

Robot.prototype.place = function(obj) {
  this.bearing = obj['direction']
  this.coordinates = [obj['x'], obj['y']]
}

Robot.prototype.evaluate = function(input) {
  var inst = this.instructions(input);
  inst.forEach((element) => {
    this[`${element}`]();
  })

  }
