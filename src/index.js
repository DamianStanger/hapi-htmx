'use strict';

const Handlebars = require('handlebars');
const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');
const {v1} = require('uuid');


const internals = {
  thisYear: new Date().getFullYear()
};


internals.rootHandler = function (request, h) {
  return h.view('index', {
    title: 'The dynamic title',
    message: 'Hello world!',
    year: internals.thisYear
  });
};

internals.uuidHandler = function (request, h) {
  return h.view(
    'uuid',
    {uuid: v1()},
    {layout: false}
  );
};

internals.quickLinksHandler = function (request, h) {
  return h.view('quick-links', {
    title: `Quick links`,
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
  server.route({ method: 'GET', path: '/uuid', handler: internals.uuidHandler });
  server.route({ method: 'GET', path: '/quick-links', handler: internals.quickLinksHandler });

  await server.start();
  console.log('Hapi server is running at ' + server.info.uri);
};

internals.main();
