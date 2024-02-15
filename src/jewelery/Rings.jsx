import React from 'react';

function Rings({  rings}) {


    return (
        <div>
            <h1>Rings</h1>
            <ul>
                {rings.map((ring, index) => (
                    <div className="ring-data" key={ring.id}>
                        <img src={ring.image}alt="" />
                        <h2>{ring.title}</h2>
                        <h2>${ring.price}</h2>
                        

                    </div>
                  
                        
                       
                 
                ))}
            </ul>
        </div>
    );
}

export default Rings;
