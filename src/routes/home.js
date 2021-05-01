'use strict';


function thisYear() {
  return new Date().getFullYear();
}

function homeHandler (request, h) {
  const location = `Accidents in ${request.params.location || "United Kingdom"}` ;
  const title = location
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
