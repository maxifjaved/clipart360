'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-polyfill');

var environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = (0, _assign2.default)({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Clipart Editor',
    description: 'All the modern best practices in one example.',
    head: {
      titleTemplate: 'Clipart Editor: %s',
      meta: [{ name: 'description', content: 'All the modern best practices in one example.' }, { charset: 'utf-8' }, { property: 'og:site_name', content: 'React Redux Example' }, { property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg' }, { property: 'og:locale', content: 'en_US' }, { property: 'og:title', content: 'Clipart Editor' }, { property: 'og:description', content: 'All the modern best practices in one example.' }, { property: 'og:card', content: 'summary' }, { property: 'og:site', content: '@navikom' }, { property: 'og:creator', content: '@navikom' }, { property: 'og:image:width', content: '200' }, { property: 'og:image:height', content: '200' }]
    }
  }

}, environment);

//# sourceMappingURL=config-compiled.js.map