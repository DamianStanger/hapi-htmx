const locations = require("../../data/locations");

const locationRepo = {
  "findAll": () => locations,
  "findByName": name => {
    if(!name) {
      return undefined;
    }
    const processedName = name.toLowerCase().replace("-", " ");
    return locations.filter(l => l.name.toLowerCase() === processedName)[0];
  },
  "findById": id => locations.filter(l => l.id === id)[0]
}

module.exports = locationRepo;
