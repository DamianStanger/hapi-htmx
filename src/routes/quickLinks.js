'use strict';


function quickLinksHandler(request, h) {
  return h.view('quick-links', {
    title: `Quick links`,
  });
}

function quickLinks(server) {
  server.route({ method: 'GET', path: '/quick-links', handler: quickLinksHandler });
}


module.exports = quickLinks;
