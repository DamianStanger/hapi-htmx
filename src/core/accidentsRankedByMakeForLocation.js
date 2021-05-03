const lodash = require("lodash");
const accidentRepo = require("./accidentRepo");
const makeRepo = require("./makeRepo");


function accidentsRankedByMakeForLocation(locationId) {
  const accidents = accidentRepo.findByLocation(locationId);
  const accidentsByMake = lodash.groupBy(accidents,a => a.makeId); //{makeId:[accidents], makeId:[accidents]}
  const makesWithAccidentCount = Object.entries(accidentsByMake).map(makeGroup => {
    const make = makeRepo.findById(makeGroup[0]);
    const accidentCount = makeGroup[1].length;
    return {
      "makeId": make.id,
      "make": make.name,
      "accidentCount": accidentCount
    }
  })
  const rankedMakes = makesWithAccidentCount.sort((m1, m2) => m2.accidentCount - m1.accidentCount);

  return rankedMakes;
}


module.exports = accidentsRankedByMakeForLocation;
