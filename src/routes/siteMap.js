'use strict';


function siteMapHandler (request, h) {
  return h.view('site-map', {
    title: `Quick Links`,
  });
}

function siteMap(server) {
  server.route({ method: 'GET', path: '/site-map', handler: siteMapHandler });
}

module.exports = siteMap;
