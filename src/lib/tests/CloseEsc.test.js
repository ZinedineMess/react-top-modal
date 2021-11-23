import Modal from '../components/Modal/Modal';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

const mockClose = jest.fn();
const showModal = true;
const activeModal = 'classic';

describe('Escape keyUp', () => {
    test('should close the modal', () => {
        render(<Modal isOpen={ showModal && activeModal === 'classic' } close={mockClose} addCloseEscape={true} />);
        fireEvent.keyUp(document, { key : 'Escape' });
        expect(mockClose.mock.calls.length).toBe(1);
    });
    test('should do nothing if keyup is not equal to Esc', () => {
        render(<Modal isOpen={ showModal && activeModal === 'classic' } close={mockClose} addCloseEscape={true} />);
        fireEvent.keyUp(document, { key : 'Enter' });
        expect(mockClose.mock.calls.length).toBe(0);
    });
});
