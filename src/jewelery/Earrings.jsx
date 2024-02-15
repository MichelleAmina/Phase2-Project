import './jewelery.css'

function Earrings({earrings}){
    return(
        <div>
       <ul>
                {earrings.map((earring, index) => (
                    <div className="Earring-data" key={earring.id}>
                        <img src={earring.image}alt="" />
                        <h2>{earring.title}</h2>
                        <h2>${earring.price}</h2>
                        
                       
                    </div>
                  
                        
                       
                 
                ))}
            </ul>
    </div>
    )
}

export default Earrings;