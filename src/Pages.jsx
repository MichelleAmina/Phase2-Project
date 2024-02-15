
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Home from "./home/Home";
import Bracelets from "./jewelery/Bracelets";
import Rings from "./jewelery/Rings";
import Earrings from "./jewelery/Earrings";
import Necklace from "./jewelery/Necklace";
import About from "./about/About";

function Pages() {

    const [jewelryData, setJewelryData] = useState([]);

    useEffect(() => {
      fetch("https://euphoria-git-main-michelle-aminas-projects.vercel.app/Jewelery")
        .then(resp => resp.json())
        .then((data) => {
          setJewelryData(data);
          //console.log("Fetched jewelry data:", data); // Log the fetched data
        })
        .catch(error => {
          console.error('Error fetching jewelry data:', error);
        });
    }, []);
  
   // console.log("Jewelry data in Pages", jewelryData); 

const filteredRings = jewelryData.filter(jewel => jewel.category === "Ring")
//console.log(filteredRings)

const filteredNecklaces = jewelryData.filter(jewel => jewel.category === "Necklace")
//console.log(filteredNecklaces)

const filteredBracelets = jewelryData.filter(jewel => jewel.category === "Bracelet")
const filteredEarring= jewelryData.filter(jewel => jewel.category === "Earring")


    return (
        <div className="pages">
            <div className="page">
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='About' element={<About/>}></Route>
                    <Route path='Rings' element={<Rings rings={filteredRings} />}></Route>
                    <Route path='Bracelets' element={<Bracelets bracelets={filteredBracelets}/>}></Route>
                    <Route path='Earrings' element={<Earrings  earrings={filteredEarring}/>}></Route>
                    <Route path='Necklace' element={<Necklace necklaces={filteredNecklaces}/>}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default Pages;
