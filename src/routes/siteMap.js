'use strict';
const locations = require("../core/locationRepo").findAll();


function siteMapHandler (request, h) {
  return h.view('site-map', {
    locations: locations
  });
}

function siteMap(server) {
  server.route({ method: 'GET', path: '/site-map', handler: siteMapHandler });
}


module.exports = siteMap;
