"use strict";

var _Modal = _interopRequireDefault(require("../components/Modal/Modal"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mockClose = jest.fn();
const showModal = true;
const activeModal = 'classic';
describe('Escape keyUp', () => {
  test('should close the modal', () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Modal.default, {
      isOpen: showModal && activeModal === 'classic',
      close: mockClose,
      addCloseEscape: true
    }));

    _react2.fireEvent.keyUp(document, {
      key: 'Escape'
    });

    expect(mockClose.mock.calls.length).toBe(1);
  });
  test('should do nothing if keyup is not equal to Esc', () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Modal.default, {
      isOpen: showModal && activeModal === 'classic',
      close: mockClose,
      addCloseEscape: true
    }));

    _react2.fireEvent.keyUp(document, {
      key: 'Enter'
    });

    expect(mockClose.mock.calls.length).toBe(0);
  });
});