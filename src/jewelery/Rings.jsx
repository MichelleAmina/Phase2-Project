
import React, { useState } from 'react';
import './jewelery.css'

function Rings({ rings }) {
    const [sortingOption, setSortingOption] = useState('Default');

    // Function to handle change in sorting option
    const handleSortingChange = (event) => {
        setSortingOption(event.target.value);
    };

    const filteredRings = () => {
        switch (sortingOption) {
            case 'Title':
                return rings.slice().sort((a, b) => a.title.localeCompare(b.title));
            case 'Price-low':
                return rings.slice().sort((a, b) => a.price - b.price);
            case 'Price-high':
                return rings.slice().sort((a, b) => b.price - a.price);
            default:
                return rings;
        }
    };

    const length = filteredRings().length;

    return (
        <div className='jewelery'>
            <h1>Rings</h1>
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
                {filteredRings().map((ring, index) => (
                    <div className="jewelery-data" key={ring.id}>
                        <img src={ring.image} alt="" />
                        <h3 className='jewel-title'>{ring.title}</h3>
                        <p className='jewel-p'>${ring.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Rings;




