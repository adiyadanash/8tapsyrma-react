// useAds.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import { useAds } from './useAds';

test('useAds adds and removes ads', () => {
    const { result } = renderHook(() => useAds());
    const { addAd, removeAd } = result.current;

    act(() => {
        addAd('Новое объявление');
    });

    expect(result.current.ads.length).toBe(1);
    expect(result.current.ads[0].title).toBe('Новое объявление');

    act(() => {
        removeAd(result.current.ads[0].id);
    });

    expect(result.current.ads.length).toBe(0);
});
