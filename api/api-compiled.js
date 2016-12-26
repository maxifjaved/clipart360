'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require('../src/config');

var _config2 = _interopRequireDefault(_config);

var _index = require('./actions/index');

var actions = _interopRequireWildcard(_index);

var _url = require('utils/url.js');

var _prettyError = require('pretty-error');

var _prettyError2 = _interopRequireDefault(_prettyError);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pretty = new _prettyError2.default();
var app = (0, _express2.default)();

var server = new _http2.default.Server(app);

var io = new _socket2.default(server);
io.path('/ws');

app.use((0, _expressSession2.default)({
  secret: 'react and redux rule!!!!',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}));
app.use(_bodyParser2.default.json());

app.use(function (req, res) {
  var splittedUrlPath = req.url.split('?')[0].split('/').slice(1);

  var _mapUrl = (0, _url.mapUrl)(actions, splittedUrlPath),
      action = _mapUrl.action,
      params = _mapUrl.params;

  if (action) {
    action(req, params).then(function (result) {
      if (result instanceof Function) {
        result(res);
      } else {
        res.json(result);
      }
    }, function (reason) {
      if (reason && reason.redirect) {
        res.redirect(reason.redirect);
      } else {
        console.error('API ERROR:', pretty.render(reason));
        res.status(reason.status || 500).json(reason);
      }
    });
  } else {
    res.status(404).end('NOT FOUND');
  }
});

var bufferSize = 100;
var messageBuffer = new Array(bufferSize);
var messageIndex = 0;

if (_config2.default.apiPort) {
  var runnable = app.listen(_config2.default.apiPort, function (err) {
    if (err) {
      console.error(err);
    }
    console.info('----\n==> 🌎  API is running on port %s', _config2.default.apiPort);
    console.info('==> 💻  Send requests to http://%s:%s', _config2.default.apiHost, _config2.default.apiPort);
  });

  io.on('connection', function (socket) {
    socket.emit('news', { msg: '\'Hello World!\' from server' });

    socket.on('history', function () {
      for (var index = 0; index < bufferSize; index++) {
        var msgNo = (messageIndex + index) % bufferSize;
        var msg = messageBuffer[msgNo];
        if (msg) {
          socket.emit('msg', msg);
        }
      }
    });

    socket.on('msg', function (data) {
      data.id = messageIndex;
      messageBuffer[messageIndex % bufferSize] = data;
      messageIndex++;
      io.emit('msg', data);
    });
  });
  io.listen(runnable);
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}

//# sourceMappingURL=api-compiled.js.map