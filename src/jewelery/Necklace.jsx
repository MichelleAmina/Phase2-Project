import './jewelery.css'
import React, { useState } from 'react';


function Necklace({ necklaces }) {
    const [sortingOption, setSortingOption] = useState('Default');

    // Function to handle change in sorting option
    const handleSortingChange = (event) => {
        setSortingOption(event.target.value);
    };

   
    const sortNecklaces = (necklaceItems) => {
        switch (sortingOption) {
            case 'Title':
                return necklaceItems.slice().sort((a, b) => a.title.localeCompare(b.title));
            case 'Price-low':
                return necklaceItems.slice().sort((a, b) => a.price - b.price);
            case 'Price-high':
                return necklaceItems.slice().sort((a, b) => b.price - a.price);
            default:
                return necklaceItems;
        }
    };

    const length = necklaces.length;

    return (
        <div className='jewelery'>
            <h1>Necklace</h1>
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
                {sortNecklaces(necklaces).map((necklace, index) => (
                    <div className="jewelery-data" key={necklace.id}>
                        <img src={necklace.image} alt="" />
                        <h3 className='jewel-title'>{necklace.title}</h3>
                        <p className='jewel-p'>${necklace.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Necklace;
