const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        [
            '/auth/google',
            '/auth/google/callback',
            '/auth/google/user',
            '/auth/google/logout',
        ],
        createProxyMiddleware({
            target: 'http://localhost:3001',
            changeOrigin: true,
        })
    );
};