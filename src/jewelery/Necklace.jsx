import './jewelery.css'

function Necklace({necklaces}){
    return(
        <div>
            <h1>Necklace</h1>
            <ul>
                {necklaces.map((necklace, index) => (
                    <div className="Necklace-data" key={necklace.id}>
                        <img src={necklace.image}alt="" />
                        <h2>{necklace.title}</h2>
                        <h2>${necklace.price}</h2>
                        

                    </div>
                  
                        
                       
                 
                ))}
            </ul>
        </div>
    );
    
}

export default Necklace;