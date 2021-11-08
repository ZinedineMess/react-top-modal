import 'App.css';
import Modal from 'lib/components/Modal/Modal';
import React from 'react';
import useModal from 'lib/utils/useModal';

function App() {
  const {isShowing : showClassicModal, toggle : toggleClassicModal} = useModal();
  const {isShowing : showModalWithCloseEsc, toggle : toggleModalWithCloseEsc} = useModal();
  const {isShowing : showModalWithCloseOverlay, toggle : toggleModalWithCloseOverlay} = useModal();
  const {isShowing : showModalWithFooterButton, toggle : toggleModalWithFooterButton} = useModal();
  const {isShowing : showModalWithSpinner, toggle : toggleModalSpinner, isLoading: showSpinner, toggleSpinner} = useModal();

  const spinnerTimer = () => {
    toggleSpinner()

    setTimeout(() => {
      toggleModalSpinner()
    }, 1000)
}

  return (
    <>
      <main>
        <button type='submit' className='buttonDefault' onClick={toggleClassicModal}>Modal (classic Modal)</button>
        <Modal 
          isShowing={showClassicModal} 
          hide={toggleClassicModal} 
          addCloseIcon={true}
        >
          <h1>Hello, Modal 1 </h1>
          <p>bla bla bla 1</p>
        </Modal>

        <button type='submit' className='buttonDefault' onClick={toggleModalWithCloseEsc}>Modal (with closeEscape)</button>
        <Modal 
          isShowing={showModalWithCloseEsc} 
          hide={toggleModalWithCloseEsc} 
          addCloseIcon={true} 
          addCloseEscape={true}
        >
          <h1>Hello, Modal 2 </h1>
          <p>bla bla bla 2</p>
        </Modal>

        <button type='submit' className='buttonDefault' onClick={toggleModalWithCloseOverlay}>Modal (with closeOverlay)</button>
        <Modal 
          isShowing={showModalWithCloseOverlay} 
          hide={toggleModalWithCloseOverlay} 
          addCloseIcon={true} 
          addCloseOverlay={true}
        >
          <h1>Hello, Modal 3 </h1>
          <p>bla bla bla 3</p>
        </Modal>

        <button type='submit' className='buttonDefault' onClick={toggleModalWithFooterButton}>Modal (with footerButton)</button>
        <Modal 
        isShowing={showModalWithFooterButton} 
        hide={toggleModalWithFooterButton} 
        addCloseIcon={false} 
        addCloseOverlay={true} 
        addFooterButton={true}
        >
          <h1>Hello, Modal 4 </h1>
          <p>bla bla bla 4</p>
        </Modal>

        <button type='submit' className='buttonDefault' onClick={spinnerTimer}>Modal (with loader after 1s)</button>
        <Modal 
          isShowing={showModalWithSpinner} 
          hide={toggleModalSpinner} 
          spinner={showSpinner}
          addCloseIcon={false} 
          addCloseOverlay={true} 
          addFooterButton={true}
        >
          <h1>Hello, Modal 5 </h1>
          <p>bla bla bla 5 </p>
        </Modal>
      </main>
    </>
  );
}

export default App;
