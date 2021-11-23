"use strict";

require("core-js/modules/es.promise.js");

var _Modal = _interopRequireDefault(require("../components/Modal/Modal"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _async = require("@babel/core/lib/gensync-utils/async");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const showModal = false;
const activeModal = 'classic';
describe('Spinner', () => {
  test('should be rendered before modal appears', () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Modal.default, {
      isOpen: showModal && activeModal === 'classic',
      close: () => null,
      spinner: true
    }));
    const spinner = document.querySelector('.spinner');
    expect(spinner).toBeInTheDocument();
  });
  test('should disappear when modal appears', async () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Modal.default, {
      isOpen: showModal && activeModal === 'classic',
      close: () => null,
      spinner: true
    }));
    const spinner = document.querySelector('.spinner');
    expect(spinner).toBeInTheDocument();
    await (0, _async.waitFor)(() => {
      expect(spinner).not.toBeInTheDocument();
    });
  });
});