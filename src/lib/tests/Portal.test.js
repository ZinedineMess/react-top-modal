import Modal from '../components/Modal/Modal';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Modal children portal', () => {
    test('should show children', () => {
        const showModal = true;
        const activeModal = 'classic';
        render(
            <Modal isOpen={ showModal && activeModal === 'classic' } close={() => null}>
                <h2>Bonjour</h2>
            </Modal>
        );
        const title = screen.getByText('Bonjour');
        expect(title).toBeInTheDocument();
    });
});
