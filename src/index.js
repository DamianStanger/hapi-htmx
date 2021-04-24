'use strict';

const Handlebars = require('handlebars');
const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');


const internals = {
  thisYear: new Date().getFullYear()
};


internals.rootHandler = function (request, h) {
  return h.view('index', {
    title: `Running hapi ${request.server.version}`,
    message: 'Hello world!',
    year: internals.thisYear
  });
};


internals.main = async function () {

  const server = Hapi.Server({ port: 3000 });

  await server.register(Vision);

  server.views({
    engines: { html: Handlebars },
    relativeTo: __dirname,
    partialsPath: 'templates/partials',
    path: 'templates',
    layout: true,
    layoutPath: 'templates/layouts'
  });

  server.route({ method: 'GET', path: '/', handler: internals.rootHandler });

  await server.start();
  console.log('Hapi server is running at ' + server.info.uri);
};

internals.main();
