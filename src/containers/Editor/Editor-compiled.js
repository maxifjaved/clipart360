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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _three = require('three');

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Editor: {
    displayName: 'Editor'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: '/Users/nadcukandrej/IdeaProjects/clipart360/src/containers/Editor/Editor.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Editor = _wrapComponent('Editor')(function (_Component) {
  (0, _inherits3.default)(Editor, _Component);

  function Editor(props) {
    (0, _classCallCheck3.default)(this, Editor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Editor.__proto__ || (0, _getPrototypeOf2.default)(Editor)).call(this, props));

    _this.needRender = false;
    _this.objects = [];
    _this.targets = { table: [] };
    return _this;
  }

  (0, _createClass3.default)(Editor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.init();
      window.addEventListener('resize', this.updateCameraAspect.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.request) {
        cancelAnimationFrame(this.request);
      }

      window.removeEventListener('resize', this.updateCameraAspect.bind(this));
    }
  }, {
    key: 'init',
    value: function init() {
      this.initContainer();
      this.initScene();
      this.initCamera();
      this.initControls();
      this.initRenderer();
      this.loadScene();
      this.animate();
    }
  }, {
    key: 'initContainer',
    value: function initContainer() {
      this.container = _reactDom2.default.findDOMNode(this);
      this.updateAspect();
    }
  }, {
    key: 'initScene',
    value: function initScene() {
      this.scene = new THREE.Scene();
    }
  }, {
    key: 'initCamera',
    value: function initCamera() {
      this.camera = new THREE.PerspectiveCamera(45, this.aspect.width / this.aspect.height, 1, 10000);
      this.camera.position.z = 3000;
    }
  }, {
    key: 'initControls',
    value: function initControls() {}
  }, {
    key: 'initRenderer',
    value: function initRenderer() {
      // renderer
      this.renderer = new THREE.WebGLRenderer();

      this.updateCameraAspect();
      this.renderWebGL();
    }
  }, {
    key: 'loadScene',
    value: function loadScene() {
      this.requestRender();
    }
  }, {
    key: 'updateAspect',
    value: function updateAspect() {
      this.aspect = {
        width: this.container.clientWidth,
        height: window.innerHeight
      };
    }
  }, {
    key: 'updateCameraAspect',
    value: function updateCameraAspect() {
      if (this.renderer === null) return;

      this.updateAspect();
      this.camera.aspect = this.aspect.width / this.aspect.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.aspect.width, this.aspect.height);
      this.requestRender();
    }
  }, {
    key: 'requestRender',
    value: function requestRender() {
      this.needRender = true;
    }
  }, {
    key: 'animate',
    value: function animate() {
      this.request = requestAnimationFrame(this.animate.bind(this));

      if (this.needRender) {
        this.renderWebGL();
        this.needRender = false;
      }
    }
  }, {
    key: 'renderWebGL',
    value: function renderWebGL() {
      console.log('render');
      this.renderer.render(this.scene, this.camera);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement('div', { id: 'canvas-container' });
    }
  }]);
  return Editor;
}(_react2.Component));

Editor.propTypes = {
  needRenderer: _react2.PropTypes.bool,
  objects: _react2.PropTypes.array,
  targets: _react2.PropTypes.object
};

exports.default = Editor;
module.exports = exports['default'];

//# sourceMappingURL=Editor-compiled.js.map