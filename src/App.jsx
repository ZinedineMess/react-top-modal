import Modal from './lib/components/Modal/Modal';
import React from 'react';
import useModal from './lib/utils/useModal';

const App = () => {
  const { modalOpen, openModal, closeModal, isLoading, toggleSpinner } = useModal();

  /**
   * Function allowing to display the loader during the indicated time
   * @return {void}
   */
    const spinnerTimer = () => {
      toggleSpinner();
  
      setTimeout(() => {
        openModal('modal-three');
      }, 1000);
    };

  return (
      <main>
        <button type='button' className='buttonDefault' data-modal='modal-one' onClick={openModal}>
          Modal (classic Modal)
        </button>
        <Modal closeFn={closeModal} open={modalOpen === 'modal-one'}>
          <h1>Hello, Modal 1 </h1>
          <p>bla bla bla 1</p>
        </Modal>

        <button type='button' className='buttonDefault' data-modal='modal-two' onClick={openModal}>
          Modal (with closeEscape)
        </button>
        <Modal closeFn={closeModal} open={modalOpen === 'modal-two'} addCloseEscape={true}>
          <h1>Hello, Modal 2 </h1>
          <p>bla bla bla 2 </p>
        </Modal>

        <button type='button' className='buttonDefault' data-modal='modal-three' onClick={openModal}>
          Modal (with closeOverlay)
        </button>
        <Modal closeFn={closeModal} open={modalOpen === 'modal-three'} addCloseOverlay={true}>
          <h1>Hello, Modal 3 </h1>
          <p>bla bla bla 3 </p>
        </Modal>

        <button type='button' className='buttonDefault' data-modal='modal-four' onClick={openModal}>
          Modal (with footerButton)
        </button>
        <Modal 
          closeFn={closeModal} 
          open={modalOpen === 'modal-four'} 
          addCloseIcon={false} 
          addFooterButton={true}
        >
          <h1>Hello, Modal 4 </h1>
          <p>bla bla bla 4 </p>
        </Modal>

        <button type='button' className='buttonDefault' data-modal='modal-five' onClick={openModal}>
          Modal (with customClassName)
        </button>
        <Modal 
          closeFn={closeModal} 
          open={modalOpen === 'modal-five'} 
          addCloseIcon={false} 
          addCloseOverlay={true} 
          addFooterButton={true}
          customClassName='custom'
        >
          <h1>Hello, Modal 5 </h1>
          <p>bla bla bla 5 </p>
        </Modal>
      </main>
  );
};

export default App;
