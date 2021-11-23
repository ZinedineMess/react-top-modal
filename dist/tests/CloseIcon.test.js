"use strict";

var _Modal = _interopRequireDefault(require("../components/Modal/Modal"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('close Icon', () => {
  test('should close the modal', () => {
    const showModal = true;
    const activeModal = 'classic';
    const mockClose = jest.fn();
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Modal.default, {
      isOpen: showModal && activeModal === 'classic',
      close: mockClose
    }));
    const close = document.body.querySelector("[aria-label='Close']");

    _react2.fireEvent.click(close);

    expect(mockClose.mock.calls.length).toBe(1);
  });
});