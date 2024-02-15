import React from 'react';
import './about.css'; 


function About() {
    return (
        <div className='about-container'>
            <div className='about-header'>
                <div className='about-image'>
                    <img src="https://dam.bluenile.com/images/public/20488/Affordable_Engagement_Ring.jpeg" alt = "wee"/>  
                </div>
                <div className='about-text'>
                    <p>A few words</p>
                    <h1>About Us</h1>
                 </div>
            </div>
                <div className='about-history'>
                    <div className='about-history-content'>
                         <h4>Europhia Team</h4>
                         <h2>About The Founders</h2>
                         <h3> Adorn yourself with jewels that mirror the brilliance within, for each gem whispers tales of resilience, elegance, and the beauty found in every journey. </h3>
                         <p>At <span>Euphoria</span>, our team of founders share a common background from Moringa School. Our collective vision revolves around showcasing and celebrating the rich authenticity of African heritage.
                         Driven by a passion for jewelry and a deep appreciation for African culture.</p>
                         <br/>
                         <p> With our roots firmly planted in the values instilled at Moranga School, we are dedicated to offering exquisite jewelry pieces inspired by the intricate designs and traditions of Africa.</p>
                         <p>Join us as we embark on this journey to share the allure of African jewelry with the world, one stunning piece at a time.</p>
                    </div>
                <div className='about-history-image'>
                    <img src="https://www.shutterstock.com/image-photo/smile-black-woman-portrait-african-600nw-2300500653.jpg" alt="weuh" />
                </div>
                           
            </div> 
                <div className='about-video'>
                     <video muted autoPlay loop width="100%" src="/Video.mp4"></video> 
                </div>   
                                              
            <div className='about-history-us'>
                <div className="about-history-text">
                <span><h4>About us</h4></span>
                 <h2>How It All Started</h2>
                </div>
               
                <div class="about-history-list">
                <ul>
                    <li>
                        <strong>2010 - Established</strong>
                        <p> Our journey began in 2010 with a passion for delivering top-quality jewelry to our customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eget enim eget tincidunt. In finibus nisi ex, eu interdum urna euismod sit amet.</p>
                    </li>
                    <li>
                        <strong>2015 - Expansion</strong>
                        <p>In 2015, we expanded our operations to reach a wider audience, providing even more customers with access to our exquisite jewelry collections. </p>
                    </li>
                    <li>
                        <strong>2018 - New Designs</strong>
                        <p>2018 marked the introduction of new designs and innovations, as we continually strive to bring fresh and captivating pieces to our customers. </p>
                    </li>
                    <li>
                        <strong>2020 - Online Presence</strong>
                        <p> Recognizing the importance of online accessibility, we launched our online store in 2020, offering customers the convenience of browsing and purchasing from the comfort of their homes.</p>
                    </li>
                    <li>
                        <strong>2021 - Customer Satisfaction</strong>
                        <p> In 2021, we reaffirmed our commitment to customer satisfaction by enhancing our customer support services and implementing feedback-driven improvements to our products and shopping experience.</p>
                    </li>
                    <li>
                        <strong>2023 - Continued Growth</strong>
                        <p>As we look towards the future, we remain dedicated to our mission of delivering exceptional quality and service. With your continued support, we aim to further expand our offerings and reach new heights in the world of jewelry.</p>
                    </li>
                 </ul> 
                 </div>                  
               
            </div>
         </div>
           );
}

export default About;
