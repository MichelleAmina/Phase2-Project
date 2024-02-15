import React, { useState } from 'react';
import './jewelery.css'

function Bracelets({ bracelets }) {
    const [sortingOption, setSortingOption] = useState('Default');

    // Function to handle change in sorting option
    const handleSortingChange = (event) => {
        setSortingOption(event.target.value);
    };

    const sortBracelets = (braceletItems) => {
        switch (sortingOption) {
            case 'Title':
                return braceletItems.slice().sort((a, b) => a.title.localeCompare(b.title));
            case 'Price-low':
                return braceletItems.slice().sort((a, b) => a.price - b.price);
            case 'Price-high':
                return braceletItems.slice().sort((a, b) => b.price - a.price);
            default:
                return braceletItems;
        }
    };

    const length = bracelets.length;

    return (
        <div className='jewelery'>
            <h1>Bracelets</h1>
            <div className="jewelery-content">
                <p>Showing all {length} results</p>
                <select value={sortingOption} onChange={handleSortingChange}>
                    <option value="Default">Default Sorting</option>
                    <option value="Title">Sort By Title</option>
                    <option value="Price-low">Sort By Price: low to high</option>
                    <option value="Price-high">Sort By Price: high to low</option>
                </select>
            </div>
            <div className="jewelery-container">
                {sortBracelets(bracelets).map((bracelet, index) => (
                    <div className="jewelery-data" key={bracelet.id}>
                        <img src={bracelet.image} alt="" />
                        <h3 className='jewel-title'>{bracelet.title}</h3>
                        <p className='jewel-p'>${bracelet.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bracelets;
