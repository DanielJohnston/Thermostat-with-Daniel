Thermostat.prototype.Up = function() {
  this.upButton();
  document.getElementById('temp').innerHTML = thermos.temp;
  $.post('http://localhost:9292/temp', { temp: thermos.temp });
};
Thermostat.prototype.Down = function() {
  this.downButton();
  document.getElementById('temp').innerHTML = thermos.temp;
  $.post('http://localhost:9292/temp', { temp: thermos.temp });
};
Thermostat.prototype.Reset = function() {
  this.resetButton();
  document.getElementById('temp').innerHTML = thermos.temp;
  $.post('http://localhost:9292/temp', { temp: thermos.temp });
};
Thermostat.prototype.PowerOn = function() {
  this.powerSavingOn();
  document.getElementById('power-saving').innerHTML = thermos.powerSavingMode;
  document.getElementById('temp').innerHTML = thermos.temp;
  // post powersavingmode to server
  // post temperature to server
};
Thermostat.prototype.PowerOff = function() {
  this.powerSavingOff();
  document.getElementById('power-saving').innerHTML = thermos.powerSavingMode;
  // post powersavingmode to server
};