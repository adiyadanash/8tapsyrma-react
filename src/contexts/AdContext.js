import React, { createContext, useState } from 'react';

export const AdContext = createContext();

export const AdProvider = ({ children }) => {
    const [ads, setAds] = useState([]);

    const addAd = (title, image) => {
        setAds([...ads, { id: Date.now(), title, image }]);
    };

    const removeAd = (id) => {
        setAds(ads.filter(ad => ad.id !== id));
    };

    const updateAd = (id, newTitle) => {
        setAds(ads.map(ad => (ad.id === id ? { ...ad, title: newTitle } : ad)));
    };

    return (
        <AdContext.Provider value={{ ads, addAd, removeAd, updateAd }}>
            {children}
        </AdContext.Provider>
    );
};

