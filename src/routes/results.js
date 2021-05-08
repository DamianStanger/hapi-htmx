'use strict';
const locationRepo = require("../core/locationRepo");
const accidentsRankedByMakeForLocation = require("../core/accidentsRankedByMakeForLocation");


function resultsHandler (request, h) {
  const locationName = request.params.location || request.query.location || "England";
  const location = locationRepo.findByName(locationName);
  const results = accidentsRankedByMakeForLocation(location.id);

  return h.view(
    'results',
    {results},
    {layout: false}
  );
}

function home(server) {
  server.route({ method: 'GET', path: '/results/{location}', handler: resultsHandler });
  server.route({ method: 'GET', path: '/results', handler: resultsHandler });
}


module.exports = home
