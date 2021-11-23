import Modal from '../components/Modal/Modal';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

const mockClose = jest.fn();
const showModal = true;
const activeModal = 'classic';

describe('click overlay', () => {
    test('should close the modal', () => {
        render(<Modal isOpen={ showModal && activeModal === 'classic' } close={mockClose} addCloseOverlay={true} />);
        const overlay = document.querySelector('.modalOverlay');
        fireEvent.click(overlay);
        expect(mockClose.mock.calls.length).toBe(1);
    });
});
