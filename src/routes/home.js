'use strict';
const locationRepo = require("../core/locationRepo");
const accidentsRankedByMakeForLocation = require("../core/accidentsRankedByMakeForLocation");


function thisYear() {
  return new Date().getFullYear();
}

function homeHandler (request, h) {
  const locationName = request.params.location || request.query.location || "England";
  const location = locationRepo.findByName(locationName);
  const title = `Accidents in ${location.name}` ;
  const results = accidentsRankedByMakeForLocation(location.id);
  const locations = locationRepo.findAll();

  return h.view('home', {
    title,
    location,
    results,
    locations,
    message: 'Hello world!',
    year: thisYear
  });
}

function home(server) {
  server.route({ method: 'GET', path: '/', handler: homeHandler });
  server.route({ method: 'GET', path: '/location/{location}', handler: homeHandler });
  server.route({ method: 'GET', path: '/search', handler: homeHandler });
}


module.exports = home
