const makes = require("../../data/makes");


const makeRepo = {
  "findAll": () => makes,
  "findById": id => makes.filter(a => a.id === id)[0]
}


module.exports = makeRepo;
