import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Ad from './Ad';

test('clicking the delete button calls removeAd callback', () => {
    const removeAd = jest.fn();
    const ad = { id: 1, title: 'Тестовое объявление' };
    const { getByText } = render(<Ad ad={ad} removeAd={removeAd} />);

    const button = getByText('Удалить');
    fireEvent.click(button);

    expect(removeAd).toHaveBeenCalledWith(1);
});