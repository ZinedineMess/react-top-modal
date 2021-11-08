import { FaTimes } from 'react-icons/fa';
import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import 'lib/components/Modal/Modal.css';
import Spinner from 'lib/components/Spinner/Spinner';

function Modal({ 
    isShowing,
    hide,
    children,
    addCloseEscape,
    addCloseOverlay,
    addCloseIcon,
    customClassName,
    addFooterButton,
    spinner,
}) {
    useEffect(() => {
        return window.addEventListener('keyup', (e) => {
            if (addCloseEscape) {
                closeModalEvent(e);
            }
        });
    });

    const closeModal = () => {
        if (isShowing) {
            hide();
        };
    }

    const closeModalEvent = e => {
        if(e.key === 'Escape') {
            closeModal();
        };
    }

    return isShowing ? ReactDom.createPortal(
        <>
            <div 
                className={`modalOverlay ${customClassName ? 'modalOverlay-' + customClassName : ''}`} 
                onClick={addCloseOverlay ? closeModal : null}
            >
                <div className={`modalWrapper ${customClassName ? 'modalWrapper-' + customClassName : ''}`}>
                    <aside className={`modal ${customClassName ? 'modal-' + customClassName : ''}`}>
                        <header className={`modalHeader ${customClassName ? 'modalHeader-' + customClassName : ''}`} >
                            {addCloseIcon 
                                && (
                                    <button 
                                        aria-label='Close' 
                                        className={`modalCloseButton ${customClassName ? 'modalCloseButton-' + customClassName : ''}`}
                                        data-dismiss='modal' 
                                        onClick={hide}
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
                                        onClick={hide}
                                    >
                                        Close Modal
                                    </button>
                                )
                            }
                        </footer>
                    </aside>
                </div>
            </div>    
        </>,
        document.getElementById('portal')
    ) : spinner 
    ? ReactDom.createPortal
    (
        <Spinner customClassName={customClassName}/>, document.getElementById('portal')
    )
    : null;
};

export default Modal;
