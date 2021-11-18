"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

const useModal = () => {
  const [modalOpen, setModal] = (0, _react.useState)(false);
  const [isLoading, setIsLoading] = (0, _react.useState)(false);

  const openModal = event => {
    const {
      target: {
        dataset: {
          modal
        }
      }
    } = event;
    if (modal) setModal(modal);
  };

  const closeModal = () => {
    setModal('');
  };

  const toggleSpinner = () => {
    setIsLoading(!isLoading);
  };

  return {
    modalOpen,
    openModal,
    closeModal,
    isLoading,
    toggleSpinner
  };
};

var _default = useModal;
exports.default = _default;