const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://back:3001',
      changeOrigin: true,
    })
  );
  app.use(
    '/auth',
    proxy({
      target: 'http://back:3001',
      changeOrigin: true,
    })
  );
};