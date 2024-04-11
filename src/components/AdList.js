import React, { useContext } from 'react';
import { AdContext } from '../contexts/AdContext';
import Ad from './Ad';
import '../App.css';

function AdList() {
    const { ads } = useContext(AdContext);

    return (
        <div>
            <h2>Bulletin List</h2>
            {ads.map(ad => (
                <Ad key={ad.id} ad={ad} />
            ))}
        </div>
    );
}

export default React.memo(AdList);
