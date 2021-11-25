import { FaTimes } from 'react-icons/fa';
import './Modal.css';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Spinner from '../Spinner/Spinner';

/**
 * React component allowing to create a modal with different customization parameters
 * @param {object} isOpen - Allows you to display the modal
 * @param {bool} showModal - Allows you to display the modal
 * @param {string} activeModal - Allows you to display the modal
 * @param {func} close - Function allows you to remove the modal
 * @param {array} children - Array containing the body of the modal
 * @param {bool} addCloseEscape - Allows to add the functionality of modal closure using the 'Esc' key
 * @param {bool} addCloseOverlay - Allows to add the functionality of modal closing by clicking on the overlay
 * @param {bool} addCloseIcon - Allows to add or not the modal closing icon
 * @param {string} customClassName - Allows you to customize the class name of each element
 * @param {bool} addFooterButton - Allows to add or not a button present in the footer of the modal
 * @param {bool} spinner - Allows to add or not a spinner during the loading of the modal
 * @return {void}
 */
const Modal = ({
    isOpen={
        showModal : false,
        activeModal: '',
    },
    close,
    children,
    addCloseEscape,
    addCloseOverlay,
    addCloseIcon,
    customClassName,
    addFooterButton,
    spinner
}) => {
    useEffect(() => {
        return window.addEventListener('keyup', (e) => {
            if (addCloseEscape) {
                closeModalEvent(e);
            }
        });
    });

    /**
     * Function allowing to close the modal if it is present on the screen
     * @return {void}
     */
    const closeModal = () => {
        if (isOpen) {
            close();
        };
    };

    /**
     * Function used to close the modal when the Esc key is clicked
     * @param {event} e
     * @return {void}
     */
    const closeModalEvent = e => {
        if(e.key === 'Escape') {
            closeModal();
        };
    };

    return isOpen 
    ? ReactDOM.createPortal(
        <div 
            className={`modalOverlay ${customClassName ? 'modalOverlay-' + customClassName : ''}`} 
            onClick={addCloseOverlay ? closeModal : null}
        >
            <aside className={`modalWrapper ${customClassName ? 'modalWrapper-' + customClassName : ''}`}>
                <section className={`modal ${customClassName ? 'modal-' + customClassName : ''}`}>
                    <header className={`modalHeader ${customClassName ? 'modalHeader-' + customClassName : ''}`} >
                        {addCloseIcon 
                            && (
                                <button 
                                    aria-label='Close' 
                                    className={`modalCloseButton ${customClassName ? 'modalCloseButton-' + customClassName : ''}`}
                                    data-dismiss='modal' 
                                    onClick={close}
                                    type='button' 
                                >
                                    <FaTimes/>
                                </button>
                            )
                        }
                    </header>
                    <section className={`modalSection ${customClassName ? 'modalSection-' + customClassName : ''}`}>
                        {children}
                    </section>
                    <footer className={`modalFooter ${customClassName ? 'modalFooter-' + customClassName : ''}`}>
                        {addFooterButton
                            && (
                                <button 
                                    className={`modalButton ${customClassName ? 'modalButton-' + customClassName : ''}`} 
                                    onClick={close}
                                >
                                    Close Modal
                                </button>
                            )
                        }
                    </footer>
                </section>
            </aside>
        </div>, document.body
    )
    : spinner 
    ? ReactDOM.createPortal
(
    <Spinner customClassName={customClassName}/>, document.body
)
: null;
};

Modal.defaultProps = {
    addCloseEscape: false,
    addCloseOverlay: false,
    addCloseIcon: true,
    addFooterButton: false,
    spinner: false,
};

Modal.propTypes = {
    close: PropTypes.func.isRequired,
    addCloseEscape: PropTypes.bool,
    addCloseOverlay: PropTypes.bool,
    addCloseIcon: PropTypes.bool,
    customClassName: PropTypes.string,
    addFooterButton: PropTypes.bool,
    spinner: PropTypes.bool,
};

export default Modal;
