import React, { useState } from 'react';
import './jewelery.css'

function Earrings({ earrings }) {
    const [sortingOption, setSortingOption] = useState('Default');

    // Function to handle change in sorting option
    const handleSortingChange = (event) => {
        setSortingOption(event.target.value);
    };

    const sortEarrings = (earringItems) => {
        switch (sortingOption) {
            case 'Title':
                return earringItems.slice().sort((a, b) => a.title.localeCompare(b.title));
            case 'Price-low':
                return earringItems.slice().sort((a, b) => a.price - b.price);
            case 'Price-high':
                return earringItems.slice().sort((a, b) => b.price - a.price);
            default:
                return earringItems;
        }
    };

    const length = earrings.length;

    return (
        <div className='jewelery'>
            <h1>Earrings</h1>
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
                {sortEarrings(earrings).map((earring, index) => (
                    <div className="jewelery-data" key={earring.id}>
                        <img src={earring.image} alt="" />
                        <h3 className='jewel-title'>{earring.title}</h3>
                        <p className='jewel-p'>${earring.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Earrings;
