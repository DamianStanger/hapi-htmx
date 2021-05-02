const accidents = require("../../data/accidents");


const accidentRepo = {
  "findAll": () => accidents,
  "findByLocation": id => {
    if(!id) {
      return [];
    }
    return accidents.filter(a => a.locationIds.includes(id));
  },
  "findById": id => accidents.filter(a => a.id === id)[0]
}


module.exports = accidentRepo;
