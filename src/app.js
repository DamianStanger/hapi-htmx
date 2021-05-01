'use strict';
const Handlebars = require('handlebars');
const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');
const inert = require('@hapi/inert');


const staticFiles = require("./routes/staticFiles");
const home = require("./routes/home");
const quickLinks = require("./routes/quickLinks");
const siteMap = require("./routes/siteMap");
const uuid = require("./routes/uuid");


async function main() {
  const server = Hapi.Server({ port: 3000 });
  await server.register(Vision);
  await server.register(inert);

  server.views({
    engines: { html: Handlebars },
    relativeTo: __dirname,
    partialsPath: 'templates/partials',
    path: 'templates',
    layout: true,
    layoutPath: 'templates/layouts'
  });

  await staticFiles(server);
  home(server);
  quickLinks(server);
  siteMap(server);
  uuid(server);

  await server.start();
  console.log('Hapi server is running at ' + server.info.uri);
}

main();
