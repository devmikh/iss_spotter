const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  for (let passTime of passTimes) {
    const date = new Date(passTime.risetime * 1000).toString();
    console.log(`Next pass at ${date} for ${passTime.duration} seconds!`);
  }
});
