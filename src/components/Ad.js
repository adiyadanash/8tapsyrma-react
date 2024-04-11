
import React, { useState, useContext, memo } from 'react';
import { AdContext } from '../contexts/AdContext';
import '../App.css';

function Ad({ ad }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(ad.title);
    const { removeAd, updateAd } = useContext(AdContext);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        updateAd(ad.id, editedTitle);
        setIsEditing(false);
    };

    return (
        <div className="Ad">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        placeholder="Заголовок"
                    />
                    <button onClick={handleSave}>Update</button>
                </div>
            ) : (
                <div>
                    <h3>{ad.title}</h3>
                    <p>{ad.description}</p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={() => removeAd(ad.id)}>Delete</button>
                </div>
            )}
            {ad.image && <img src={URL.createObjectURL(ad.image)} alt="Ad" />}
        </div>
    );
}

export default memo(Ad);

