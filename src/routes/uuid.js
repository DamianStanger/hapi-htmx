'use strict';
const {v1} = require('uuid');


function uuidHandler(request, h) {
  return h.view(
    'uuid',
    {uuid: v1()},
    {layout: false}
  );
}

function uuid(server) {
  server.route({ method: 'GET', path: '/uuid', handler: uuidHandler });
}


module.exports = uuid;
