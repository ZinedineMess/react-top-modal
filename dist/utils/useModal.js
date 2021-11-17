"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

const useModal = () => {
  const [isShowing, setIsShowing] = (0, _react.useState)(false);
  const [isLoading, setIsLoading] = (0, _react.useState)(false);
  /**
   * Function allowing to change the state in order to make the modal appear or not
   * If the modal is displayed, we remove the spinner
   * @return {void}
   */

  const toggle = () => {
    setIsShowing(!isShowing);

    if (!isShowing) {
      setIsLoading(false);
    }

    ;
  };
  /**
   * Function allowing to change the state in order to make the spinner appear or not
   * @return {void}
   */


  const toggleSpinner = () => {
    setIsLoading(!isLoading);
  };

  return {
    isShowing,
    toggle,
    isLoading,
    toggleSpinner
  };
};

var _default = useModal;
exports.default = _default;