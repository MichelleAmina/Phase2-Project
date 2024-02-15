import './footer.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <h2>Euphoria</h2>
                    <p>Jewelery Store</p>
                </div>
                <div className="footer-content">
                    <h4>About Us</h4>
                    <NavLink className="nav-link" to="/">Home</NavLink> <br/>
                    <NavLink className="nav-link" to="About">About</NavLink><br/>
                    <NavLink className="nav-link" to="Contact">Contact</NavLink>
                </div>
                <div className="footer-content">
                    <h4>Shop</h4>
                    <NavLink className="nav-link" to="Rings">Rings</NavLink><br/>
                    <NavLink className="nav-link" to="Bracelets">Bracelets</NavLink><br/>
                    <NavLink className="nav-link" to="Earrings">Earrings</NavLink><br/>
                    <NavLink className="nav-link" to="Necklace">Necklace</NavLink>   
                </div>
                <div className="footer-content">
                    <h4>Adress</h4>
                    <p>Ngong Lane</p>
                    <p>00100 Nbi</p>
                    <p>Euphoria@gmail.com</p>
                    <p>07123456789</p>
                </div>
                
            </div>
            <div className="footer-copyright">
                 <p>
                    @{new Date().getFullYear()} Group14. Blingg Jewelry || Powered By Euphoria_Jewelery 
                 </p>
            </div>  

        </div>

    
    );
}

export default Footer;