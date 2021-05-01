'use strict';
const locations = require("../../data/locations.json").locations;


function siteMapHandler (request, h) {
  return h.view('site-map', {
    locations: locations
  });
}

function siteMap(server) {
  server.route({ method: 'GET', path: '/site-map', handler: siteMapHandler });
}


module.exports = siteMap;
