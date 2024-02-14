import './home.css'



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
                </div>
                <div className="home-mid-images">
                    <div className="home-mid-content">
                    <img src="public/1124edd94a94a25710b78f8393727388.jpg" alt="" />
                    <h3>Product name 1</h3>
                    <p>$300</p>
                    </div>
                    <div className="home-mid-content">
                    <img src="public/c75b3fcdc3ddb736d1bd4451d8df6f7e.jpg" alt="" />
                    <h3>Product name 2</h3>
                    <p>$700</p>
                    </div>
                    <div className="home-mid-content">
                    <img src="public/beb7902ee08bf5db47dbd7bd7993611f.jpg" alt="" />
                    <h3>Product name 3</h3>
                    <p>$1500</p>
                    </div>
                    <div className="home-mid-content">
                    <img src="public/e34a65184e647e41997f2214f3c9328f.jpg" alt="" />
                    <h3>Product name 4</h3>
                    <p>$1000</p>
                    </div>
                    
                </div>
                <div className="home-mid-text">
                <h4>shop</h4>
                <h2>Best selling</h2>
                </div>
                <div className="home-mid-images">
                    <div className="home-mid-content">
                    <img src="public/95efe514d75525cb308be7f1b0652fda.jpg" alt="" />
                    <h3>Product name 1</h3>
                    <p>$500</p>
                    </div>
                    <div className="home-mid-content">
                    <img src="public/5ce57a153c88c23b5bb550faee4b86e2.jpg" alt="" />
                    <h3>Product name 2</h3>
                    <p>$800</p>
                    </div>
                    <div className="home-mid-content">
                    <img src="public/088ca799476956919b4716ec26d09b1d.jpg" alt="" />
                    <h3>Product name 3</h3>
                    <p>$4000</p>
                    </div>
                    <div className="home-mid-content">
                    <img src="public/8fef0e4f1e10a5be132c82ec51f79e9c.jpg" alt="" />
                    <h3>Product name 4</h3>
                    <p>$2000</p>
                    </div>
                    
                </div>
            </div>
            <div className="home-lower">
               <div className="home-lower-text">
               <h4>Unique Pieces Always On Trend</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
               </div>
               <div className='home-lower-right'>
               <div className='home-small-right'>
                    <img src="public/262b5c95135304500edb7a9fc95480c8.jpg" alt="" />
                </div>
                <img src="public/1363568210a045b3d06f5c4dec9f044a.jpg" alt="" />
               </div>
            </div>
<div className="why-choose-us-container">
            <h2>BEST IN BUSINESS</h2>
            <h3>WHY CHOOSE US</h3>
            <p>CRAS MALESUADA DOLOR SIT AMET EST EGESTAS ULLAMCORPER. NULLAM IN TORTOR MI. MAECENAS VULPUTATE LIBERO</p>
        </div>
        <div className="promotion-container">
            <div className="promotion-card">
                <h2>BIG DISCOUNTS</h2>
                <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
            </div>
            <div className="promotion-card">
                <h2>FREE SHIPPING</h2>
                <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
            </div>
            <div className="promotion-card">
                <h2>SECURE PAYMENTS</h2>
                <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
            </div>
            <div className="promotion-card">
                <h2>ORDER TRACKING</h2>
                <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
            </div>
        </div>
        </div>
    )
}

export default Home; 