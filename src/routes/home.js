'use strict';
const locationRepo = require("../core/locationRepo");


function thisYear() {
  return new Date().getFullYear();
}

function homeHandler (request, h) {
  const location = locationRepo.findByName(request.params.location) || locationRepo.findAll()[0];
  const title = `Accidents in ${location.name}` ;
  return h.view('home', {
    title,
    location,
    message: 'Hello world!',
    year: thisYear
  });
}

function home(server) {
  server.route({ method: 'GET', path: '/', handler: homeHandler });
  server.route({ method: 'GET', path: '/location/{location}', handler: homeHandler });
}


module.exports = home
