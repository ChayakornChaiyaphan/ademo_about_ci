import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should update val and increment by new val', () => {
    const { result } = renderHook(() => useCounter());

    // Update val first
    act(() => {
      result.current.setVal(5);
    });

    // Then call increment after val has been updated
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(5); // count should increase to 5
  });
});
