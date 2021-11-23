import Modal from '../components/Modal/Modal'
import React from 'react'
import { render } from '@testing-library/react';
import { waitFor } from '@babel/core/lib/gensync-utils/async'

const showModal = false;
const activeModal = 'classic';

describe('Spinner', () => {
    test('should be rendered before modal appears', () => {
        render(<Modal isOpen={ showModal && activeModal === 'classic' } close={() => null} spinner={true} />);
        const spinner = document.querySelector('.spinner');
        expect(spinner).toBeInTheDocument();
    });

    test('should disappear when modal appears', async () => {
        render(<Modal isOpen={ showModal && activeModal === 'classic' } close={() => null} spinner={true} />);
        const spinner = document.querySelector('.spinner');
        expect(spinner).toBeInTheDocument();

        await waitFor(() => {
            expect(spinner).not.toBeInTheDocument();
        });
    });
});
