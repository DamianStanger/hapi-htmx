'use strict';
const locationRepo = require("../core/locationRepo");
const accidentsRankedByMakeForLocation = require("../core/accidentsRankedByMakeForLocation");


function resultsHandler (request, h) {
  const location = locationRepo.findByName(request.params.location) || locationRepo.findAll()[0];
  const results = accidentsRankedByMakeForLocation(location.id);

  return h.view(
    'results',
    {results},
    {layout: false}
  );
}

function home(server) {
  server.route({ method: 'GET', path: '/results/{location}', handler: resultsHandler });
}


module.exports = home
