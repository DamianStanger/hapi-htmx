'use strict';


function thisYear() {
  return new Date().getFullYear();
}


function homeHandler (request, h) {
  return h.view('home', {
    title: 'The dynamic title',
    message: 'Hello world!',
    year: thisYear
  });
};

function home(server) {
  server.route({ method: 'GET', path: '/', handler: homeHandler });
}


module.exports = home
