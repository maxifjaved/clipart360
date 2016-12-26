'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
exports.increment = increment;
var INCREMENT = 'redux-example/counter/INCREMENT';

var initialState = {
  count: 0
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case INCREMENT:
      var count = state.count;

      return {
        count: count + 1
      };
    default:
      return state;
  }
}

function increment() {
  return {
    type: INCREMENT
  };
}

//# sourceMappingURL=counter-compiled.js.map