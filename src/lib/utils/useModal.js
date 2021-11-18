import { useState } from 'react';

const useModal = () => {
    const [modalOpen, setModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const openModal = event => {
        const { target: { dataset: { modal } }} = event;
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
        toggleSpinner,
    };
};

export default useModal;
