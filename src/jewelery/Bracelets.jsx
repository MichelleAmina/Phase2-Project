import './jewelery.css'

function Bracelets ({bracelets}) {
    return (
        <div>
       <ul>
                {bracelets.map((bracelet, index) => (
                    <div className="Bracelet-data" key={bracelet.id}>
                        <img src={bracelet.image}alt="" />
                        <h2>{bracelet.title}</h2>
                        <h2>${bracelet.price}</h2>
                        

                    </div>
                  
                        
                       
                 
                ))}
            </ul>
    </div>
);
    
}
    export default Bracelets;