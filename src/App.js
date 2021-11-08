import React from 'react';
import Modal from 'lib/components/Modal/Modal';
import useModal from 'lib/utils/useModal';
import 'App.css';

function App() {
  const {isShowing : showClassicModal, toggle : toggleClassicModal} = useModal();
  const {isShowing : showModalCloseEsc, toggle : toggleModalCloseEsc} = useModal();
  const {isShowing : showModalCloseOverlay, toggle : toggleModalCloseOverlay} = useModal();
  const {isShowing : showModalButtonFooter, toggle : toggleModalButtonFooter} = useModal();

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

        <button type='submit' className='buttonDefault' onClick={toggleModalCloseEsc}>Modal (with closeEscape)</button>
        <Modal 
          isShowing={showModalCloseEsc} 
          hide={toggleModalCloseEsc} 
          addCloseIcon={true} 
          addCloseEscape={true}
        >
          <h1>Hello, Modal 2 </h1>
          <p>bla bla bla 2</p>
        </Modal>

        <button type='submit' className='buttonDefault' onClick={toggleModalCloseOverlay}>Modal (with closeOverlay)</button>
        <Modal 
          isShowing={showModalCloseOverlay} 
          hide={toggleModalCloseOverlay} 
          addCloseIcon={true} 
          addCloseOverlay={true}
        >
          <h1>Hello, Modal 3 </h1>
          <p>bla bla bla 3</p>
        </Modal>

        <button type='submit' className='buttonDefault' onClick={toggleModalButtonFooter}>Modal (with buttonFooter)</button>
        <Modal 
        isShowing={showModalButtonFooter} 
        hide={toggleModalButtonFooter} 
        addCloseIcon={false} 
        addCloseOverlay={true} 
        addButtonFooter={true}
        >
          <h1>Hello, Modal 4 </h1>
          <p>bla bla bla 4</p>
        </Modal>
      </main>
    </>
  );
}

export default App;
