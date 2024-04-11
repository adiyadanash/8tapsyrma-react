import React, { useState, useContext } from 'react';
import { AdContext } from '../contexts/AdContext';
import '../App.css';

function AddAdForm() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const { addAd } = useContext(AdContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addAd(title, image);
        setTitle('');
        setImage(null);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Введите объявления"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
            <button type="submit">Add bulletin</button>
        </form>
    );
}

export default AddAdForm;
