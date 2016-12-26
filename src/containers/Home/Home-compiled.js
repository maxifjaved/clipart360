'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _reactRouter = require('react-router');

var _components2 = require('components');

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Home: {
    displayName: 'Home'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: '/Users/nadcukandrej/IdeaProjects/django-react-redux-universal-starter-kit/src/containers/Home/Home.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Home = _wrapComponent('Home')(function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);
    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      var styles = require('./Home.scss');
      // require the logo image both from client and server
      var logoImage = require('./logo.png');
      return _react3.default.createElement(
        'div',
        { className: styles.home },
        _react3.default.createElement(_reactHelmet2.default, { title: 'Home' }),
        _react3.default.createElement(
          'div',
          { className: styles.masthead },
          _react3.default.createElement(
            'div',
            { className: 'container' },
            _react3.default.createElement(
              'div',
              { className: styles.logo },
              _react3.default.createElement(
                'p',
                null,
                _react3.default.createElement('img', { src: logoImage })
              )
            ),
            _react3.default.createElement(
              'h1',
              null,
              _config2.default.app.title
            ),
            _react3.default.createElement(
              'h2',
              null,
              _config2.default.app.description
            ),
            _react3.default.createElement(
              'p',
              null,
              _react3.default.createElement(
                'a',
                { className: styles.github, href: 'https://github.com/erikras/react-redux-universal-hot-example',
                  target: '_blank' },
                _react3.default.createElement('i', { className: 'fa fa-github' }),
                ' View on Github'
              )
            ),
            _react3.default.createElement(_components2.GithubButton, { user: 'erikras',
              repo: 'react-redux-universal-hot-example',
              type: 'star',
              width: 160,
              height: 30,
              count: true, large: true }),
            _react3.default.createElement(_components2.GithubButton, { user: 'erikras',
              repo: 'react-redux-universal-hot-example',
              type: 'fork',
              width: 160,
              height: 30,
              count: true, large: true }),
            _react3.default.createElement(
              'p',
              { className: styles.humility },
              'Created and maintained by ',
              _react3.default.createElement(
                'a',
                { href: 'https://twitter.com/erikras', target: '_blank' },
                '@erikras'
              ),
              '.'
            )
          )
        ),
        _react3.default.createElement(
          'div',
          { className: 'container' },
          _react3.default.createElement(
            'div',
            { className: styles.counterContainer },
            _react3.default.createElement(_components2.CounterButton, { multireducerKey: 'counter1' }),
            _react3.default.createElement(_components2.CounterButton, { multireducerKey: 'counter2' }),
            _react3.default.createElement(_components2.CounterButton, { multireducerKey: 'counter3' })
          ),
          _react3.default.createElement(
            'p',
            null,
            'This starter boilerplate app uses the following technologies: 2'
          ),
          _react3.default.createElement(
            'ul',
            null,
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'del',
                null,
                'Isomorphic'
              ),
              ' ',
              _react3.default.createElement(
                'a',
                { href: 'https://medium.com/@mjackson/universal-javascript-4761051b7ae9' },
                'Universal'
              ),
              ' rendering'
            ),
            _react3.default.createElement(
              'li',
              null,
              'Both client and server make calls to load data from separate API server'
            ),
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: 'https://github.com/facebook/react', target: '_blank' },
                'React'
              )
            ),
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: 'https://github.com/rackt/react-router', target: '_blank' },
                'React Router'
              )
            ),
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: 'http://expressjs.com', target: '_blank' },
                'Express'
              )
            ),
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: 'http://babeljs.io', target: '_blank' },
                'Babel'
              ),
              ' for ES6 and ES7 magic'
            ),
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: 'http://webpack.github.io', target: '_blank' },
                'Webpack'
              ),
              ' for bundling'
            ),
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: 'http://webpack.github.io/docs/webpack-dev-middleware.html', target: '_blank' },
                'Webpack Dev Middleware'
              )
            ),
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: 'https://github.com/glenjamin/webpack-hot-middleware', target: '_blank' },
                'Webpack Hot Middleware'
              )
            ),
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: 'https://github.com/rackt/redux', target: '_blank' },
                'Redux'
              ),
              '\'s futuristic ',
              _react3.default.createElement(
                'a',
                {
                  href: 'https://facebook.github.io/react/blog/2014/05/06/flux.html', target: '_blank' },
                'Flux'
              ),
              ' implementation'
            ),
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: 'https://github.com/gaearon/redux-devtools', target: '_blank' },
                'Redux Dev Tools'
              ),
              ' for next generation DX (developer experience). Watch ',
              _react3.default.createElement(
                'a',
                { href: 'https://www.youtube.com/watch?v=xsSnOQynTHs', target: '_blank' },
                'Dan Abramov\'s talk'
              ),
              '.'
            ),
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: 'https://github.com/rackt/redux-router', target: '_blank' },
                'Redux Router'
              ),
              ' Keep your router state in your Redux store'
            ),
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: 'http://eslint.org', target: '_blank' },
                'ESLint'
              ),
              ' to maintain a consistent code style'
            ),
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: 'https://github.com/erikras/redux-form', target: '_blank' },
                'redux-form'
              ),
              ' to manage form state in Redux'
            ),
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: 'https://github.com/sslotsky/violet-paginator', target: '_blank' },
                'violet-paginator'
              ),
              ' to manage list state in Redux, including pagination, sorting, filtering, updating, and more.'
            ),
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: 'https://github.com/erikras/multireducer', target: '_blank' },
                'multireducer'
              ),
              ' combine several identical reducer states into one key-based reducer'
            ),
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: 'https://github.com/webpack/style-loader', target: '_blank' },
                'style-loader'
              ),
              ' and ',
              _react3.default.createElement(
                'a',
                {
                  href: 'https://github.com/jtangelder/sass-loader', target: '_blank' },
                'sass-loader'
              ),
              ' to allow import of stylesheets'
            ),
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: 'https://github.com/shakacode/bootstrap-sass-loader', target: '_blank' },
                'bootstrap-sass-loader'
              ),
              ' and ',
              _react3.default.createElement(
                'a',
                {
                  href: 'https://github.com/gowravshekar/font-awesome-webpack', target: '_blank' },
                'font-awesome-webpack'
              ),
              ' to customize Bootstrap and FontAwesome'
            ),
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: 'http://socket.io/' },
                'socket.io'
              ),
              ' for real-time communication'
            )
          ),
          _react3.default.createElement(
            'h3',
            null,
            'Features demonstrated in this project'
          ),
          _react3.default.createElement(
            'dl',
            null,
            _react3.default.createElement(
              'dt',
              null,
              'Multiple components subscribing to same redux store slice'
            ),
            _react3.default.createElement(
              'dd',
              null,
              'The ',
              _react3.default.createElement(
                'code',
                null,
                'App.js'
              ),
              ' that wraps all the pages contains an ',
              _react3.default.createElement(
                'code',
                null,
                'InfoBar'
              ),
              ' component that fetches data from the server initially, but allows for the user to refresh the data from the client. ',
              _react3.default.createElement(
                'code',
                null,
                'About.js'
              ),
              ' contains a ',
              _react3.default.createElement(
                'code',
                null,
                'MiniInfoBar'
              ),
              ' that displays the same data.'
            ),
            _react3.default.createElement(
              'dt',
              null,
              'Server-side data loading'
            ),
            _react3.default.createElement(
              'dd',
              null,
              'The ',
              _react3.default.createElement(
                _reactRouter.Link,
                { to: '/widgets' },
                'Widgets page'
              ),
              ' demonstrates how to fetch data asynchronously from some source that is needed to complete the server-side rendering. ',
              _react3.default.createElement(
                'code',
                null,
                'Widgets.js'
              ),
              '\'s',
              _react3.default.createElement(
                'code',
                null,
                'asyncConnect()'
              ),
              ' function is called before the widgets page is loaded, on either the server or the client, allowing all the widget data to be loaded and ready for the page to render.'
            ),
            _react3.default.createElement(
              'dt',
              null,
              'Data loading errors'
            ),
            _react3.default.createElement(
              'dd',
              null,
              'The ',
              _react3.default.createElement(
                _reactRouter.Link,
                { to: '/widgets' },
                'Widgets page'
              ),
              ' also demonstrates how to deal with data loading errors in Redux. The API endpoint that delivers the widget data intentionally fails 33% of the time to highlight this. The ',
              _react3.default.createElement(
                'code',
                null,
                'clientMiddleware'
              ),
              ' sends an error action which the ',
              _react3.default.createElement(
                'code',
                null,
                'widgets'
              ),
              ' reducer picks up and saves to the Redux state for presenting to the user.'
            ),
            _react3.default.createElement(
              'dt',
              null,
              'Session based login'
            ),
            _react3.default.createElement(
              'dd',
              null,
              'On the ',
              _react3.default.createElement(
                _reactRouter.Link,
                { to: '/login' },
                'Login page'
              ),
              ' you can submit a username which will be sent to the server and stored in the session. Subsequent refreshes will show that you are still logged in.'
            ),
            _react3.default.createElement(
              'dt',
              null,
              'Redirect after state change'
            ),
            _react3.default.createElement(
              'dd',
              null,
              'After you log in, you will be redirected to a Login Success page. This ',
              _react3.default.createElement(
                'strike',
                null,
                'magic'
              ),
              ' logic is performed in ',
              _react3.default.createElement(
                'code',
                null,
                'componentWillReceiveProps()'
              ),
              ' in ',
              _react3.default.createElement(
                'code',
                null,
                'App.js'
              ),
              ', but it could be done in any component that listens to the appropriate store slice, via Redux\'s ',
              _react3.default.createElement(
                'code',
                null,
                '@connect'
              ),
              ', and pulls the router from the context.'
            ),
            _react3.default.createElement(
              'dt',
              null,
              'Auth-required views'
            ),
            _react3.default.createElement(
              'dd',
              null,
              'The aforementioned Login Success page is only visible to you if you are logged in. If you try to ',
              _react3.default.createElement(
                _reactRouter.Link,
                { to: '/loginSuccess' },
                'go there'
              ),
              ' when you are not logged in, you will be forwarded back to this home page. This ',
              _react3.default.createElement(
                'strike',
                null,
                'magic'
              ),
              ' logic is performed by the',
              _react3.default.createElement(
                'code',
                null,
                'onEnter'
              ),
              ' hook within ',
              _react3.default.createElement(
                'code',
                null,
                'routes.js'
              ),
              '.'
            ),
            _react3.default.createElement(
              'dt',
              null,
              'Forms'
            ),
            _react3.default.createElement(
              'dd',
              null,
              'The ',
              _react3.default.createElement(
                _reactRouter.Link,
                { to: '/survey' },
                'Survey page'
              ),
              ' uses the still-experimental ',
              _react3.default.createElement(
                'a',
                { href: 'https://github.com/erikras/redux-form', target: '_blank' },
                'redux-form'
              ),
              ' to manage form state inside the Redux store. This includes immediate client-side validation.'
            ),
            _react3.default.createElement(
              'dt',
              null,
              'Pagination'
            ),
            _react3.default.createElement(
              'dd',
              null,
              'The ',
              _react3.default.createElement(
                _reactRouter.Link,
                { to: '/pagination' },
                'Pagination page'
              ),
              ' uses',
              _react3.default.createElement(
                'a',
                { href: 'https://www.npmjs.com/package/violet-paginator', target: '_blank' },
                'violet-paginator'
              ),
              ' to paginate and sort records in a data table.'
            ),
            _react3.default.createElement(
              'dt',
              null,
              'WebSockets / socket.io'
            ),
            _react3.default.createElement(
              'dd',
              null,
              'The ',
              _react3.default.createElement(
                _reactRouter.Link,
                { to: '/chat' },
                'Chat'
              ),
              ' uses the socket.io technology for real-time communication between clients. You need to ',
              _react3.default.createElement(
                _reactRouter.Link,
                { to: '/login' },
                'login'
              ),
              ' first.'
            )
          ),
          _react3.default.createElement(
            'h3',
            null,
            'From the author'
          ),
          _react3.default.createElement(
            'p',
            null,
            'I cobbled this together from a wide variety of similar "starter" repositories. As I post this in June 2015, all of these libraries are right at the bleeding edge of web development. They may fall out of fashion as quickly as they have come into it, but I personally believe that this stack is the future of web development and will survive for several years. I\'m building my new projects like this, and I recommend that you do, too.'
          ),
          _react3.default.createElement(
            'p',
            null,
            'Thanks for taking the time to check this out.'
          ),
          _react3.default.createElement(
            'p',
            null,
            '– Erik Rasmussen'
          )
        )
      );
    }
  }]);
  return Home;
}(_react2.Component));

exports.default = Home;
module.exports = exports['default'];

//# sourceMappingURL=Home-compiled.js.map