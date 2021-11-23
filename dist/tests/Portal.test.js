"use strict";

var _Modal = _interopRequireDefault(require("../components/Modal/Modal"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Modal children portal', () => {
  test('should show children', () => {
    const showModal = true;
    const activeModal = 'classic';
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Modal.default, {
      isOpen: showModal && activeModal === 'classic',
      close: () => null
    }, /*#__PURE__*/_react.default.createElement("h2", null, "Bonjour")));

    const title = _react2.screen.getByText('Bonjour');

    expect(title).toBeInTheDocument();
  });
});