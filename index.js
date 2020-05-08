const { nextISSTimesForMyLocation } = require('./iss');
const { printPassTimes } = require('./print_pass_times');

nextISSTimesForMyLocation((error, passTimes) => {
  printPassTimes(passTimes);
});


