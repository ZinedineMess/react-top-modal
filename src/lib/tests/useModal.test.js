import { renderHook, act } from '@testing-library/react-hooks';
import useModal from '../utils/useModal';

describe('useModal hook', () => {
    test('should have as initial value', () => {
        const { result } = renderHook(() => useModal());

        expect(result.current.showModal).toBe(false);
        expect(typeof result.current.handleOpenModal).toBe('function');
    });

    test('should update showModal to true to show the modal', () => {
        const { result } = renderHook(() => useModal());

        act(() => result.current.handleOpenModal());

        expect(result.current.showModal).toBe(true);
        expect(result.current.isLoading).toBe(false);
    });

    test('should update isLoading to true to show the spinner', () => {
        const { result } = renderHook(() => useModal());

        act(() => result.current.toggleSpinner());

        expect(result.current.isLoading).toBe(true);
    });

    test('should update isLoading to false if modal is open', () => {
        const { result } = renderHook(() => useModal());

        act(() => {
            result.current.toggleSpinner();
            result.current.handleOpenModal();
        });
        
        expect(result.current.isLoading).toBe(false);
    });
});
