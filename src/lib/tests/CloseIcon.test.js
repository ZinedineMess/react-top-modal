import Modal from '../components/Modal/Modal';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

describe('close Icon', () => {
    test('should close the modal', () => {
        const showModal = true;
        const activeModal = 'classic';
        const mockClose = jest.fn();
        render(<Modal isOpen={ showModal && activeModal === 'classic' } close={mockClose}/> );
        const close = document.body.querySelector("[aria-label='Close']");
        fireEvent.click(close);
        expect(mockClose.mock.calls.length).toBe(1);
    });
});
