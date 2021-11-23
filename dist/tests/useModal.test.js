"use strict";

var _reactHooks = require("@testing-library/react-hooks");

var _useModal = _interopRequireDefault(require("../utils/useModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('useModal hook', () => {
  test('should have as initial value', () => {
    const {
      result
    } = (0, _reactHooks.renderHook)(() => (0, _useModal.default)());
    expect(result.current.showModal).toBe(false);
    expect(typeof result.current.handleOpenModal).toBe('function');
  });
  test('should update showModal to true to show the modal', () => {
    const {
      result
    } = (0, _reactHooks.renderHook)(() => (0, _useModal.default)());
    (0, _reactHooks.act)(() => result.current.handleOpenModal());
    expect(result.current.showModal).toBe(true);
    expect(result.current.isLoading).toBe(false);
  });
  test('should update isLoading to true to show the spinner', () => {
    const {
      result
    } = (0, _reactHooks.renderHook)(() => (0, _useModal.default)());
    (0, _reactHooks.act)(() => result.current.toggleSpinner());
    expect(result.current.isLoading).toBe(true);
  });
  test('should update isLoading to false if modal is open', () => {
    const {
      result
    } = (0, _reactHooks.renderHook)(() => (0, _useModal.default)());
    (0, _reactHooks.act)(() => {
      result.current.toggleSpinner();
      result.current.handleOpenModal();
    });
    expect(result.current.isLoading).toBe(false);
  });
});