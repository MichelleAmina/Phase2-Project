import './home.css'
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';



function Home(){
    return(
        <div className="home-container">
            <div className="home-header">
                <img src="header.jpeg" alt="banner" />
                <div className="home-header-text">
                    <h4>New Collection</h4>
                    <h1>The new ring sensation</h1>
                    <p>Experience the epitome of elegance and sophistication with our latest collection. Discover timeless beauty and exquisite craftsmanship </p>
                </div>
            </div>
            <div className="home-mid">
                <div className="home-mid-text">
                <h4>Latest Products</h4>
                <h2>Discover New</h2>
                <hr />
                </div>
                <div className="home-mid-images">
                    <div className="home-mid-content">
                    <img src="/1124edd94a94a25710b78f8393727388.jpg" alt="" />
                    <h3>Emerald bracelet with diamonds</h3>
                    <p>$1300</p>
                    </div>
                    <div className="home-mid-content">
                    <img src="/c75b3fcdc3ddb736d1bd4451d8df6f7e.jpg" alt="" />
                    <h3>Saphire necklace</h3>
                    <p>$700</p>
                    </div>
                    <div className="home-mid-content">
                    <img src="/beb7902ee08bf5db47dbd7bd7993611f.jpg" alt="" />
                    <h3>Gold and marble bracelet</h3>
                    <p>$1500</p>
                    </div>
                    <div className="home-mid-content">
                    <img src="/e34a65184e647e41997f2214f3c9328f.jpg" alt="" />
                    <h3>18k Gold Earrings</h3>
                    <p>$1000</p>
                    </div>
                    
                </div>
                <div className="home-mid-text">
                <h4>shop</h4>
                <h2>Best selling</h2>
                <hr />
                </div>
                <div className="home-mid-images">
                    <div className="home-mid-content">
                    <img src="/95efe514d75525cb308be7f1b0652fda.jpg" alt="" />
                    <h3>Zircona butterfly ring</h3>
                    <p>$500</p>
                    </div>
                    <div className="home-mid-content">
                    <img src="/5ce57a153c88c23b5bb550faee4b86e2.jpg" alt="" />
                    <h3>Double hoop pearl necklace</h3>
                    <p>$800</p>
                    </div>
                    <div className="home-mid-content">
                    <img src="/088ca799476956919b4716ec26d09b1d.jpg" alt="" />
                    <h3>Morganite and diamond engagement ring</h3>
                    <p>$4000</p>
                    </div>
                    <div className="home-mid-content">
                    <img src="/8fef0e4f1e10a5be132c82ec51f79e9c.jpg" alt="" />
                    <h3>Rose gold teardrop Earrings</h3>
                    <p>$900</p>
                    </div>
                    
                </div>
            </div>
            <div className="home-lower">
               <div className="home-lower-text">
               <h4>Unique Pieces</h4>
               <h2>Be Always On Trend</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
               </div>
               <div className='home-lower-right'>
                   <img src="/1363568210a045b3d06f5c4dec9f044a.jpg" alt="" />
                   <div className='home-small-right'>
                        <img src="/Rings.jpeg" alt="" />   
                    </div> 
               </div>
            </div>
            <div className="why-choose-us-container">
            <h4>Best In Business</h4>
            <h2>Why Choose Us</h2>
            <p>CRAS MALESUADA DOLOR SIT AMET EST EGESTAS ULLAMCORPER. NULLAM IN TORTOR MI. MAECENAS VULPUTATE LIBERO</p>
            <hr />
            </div>
            <div className="promotion-container">
            <div className="promotion-card">
                <DiscountOutlinedIcon className='promotion-icon'/>
                <h2>Big Discounts</h2>
                <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
            </div>
            <div className="promotion-card">
                <LocalShippingOutlinedIcon className='promotion-icon'/>
                <h2>Free Shipping</h2>
                <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
            </div>
            <div className="promotion-card">
                <PaymentsOutlinedIcon className='promotion-icon'/>
                <h2>Secure Payments</h2>
                <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
            </div>
            <div className="promotion-card">
                <PinDropOutlinedIcon className='promotion-icon'/>
                <h2>Order Tracking</h2>
                <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
            </div>
        </div>
        </div>
    )
}

export default Home; 