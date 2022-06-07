import React from 'react';
import './health.css';
import about1 from '../../../images/about/solutions/1.jpg'
import about2 from '../../../images/about/solutions/2.png'
import about3 from '../../../images/about/solutions/3.png'
import Toolsbar from '../Toolsbar/Toolsbar';
import Navbar from '../Toolsbar/Navbar/Navbar';
function Health() {
    return (
        <div>
        <div>
            <div className="nav-header">
         <Toolsbar></Toolsbar>
         <Navbar ></Navbar>
        
     </div>
        </div>
        <div id="rs-about" class="rs-about style10 gray-bg5 p-5">
                <div class="" style={{width: '90%', margin: 'auto'}}>
                    <div class="row">
                        <div class="col-lg-6 pr-70 md-pr-15 md-mb-50">
                            <div class="sec-title4 mb-30">
                            <h1 class="new pb-10" style={{ color: "#f79a2a" }}>Health Care</h1>
                            <div>
                            Our Company prides itself as a medical sales, distribution and service orientated company that was established back in 2014.
                                </div>
                            </div>
                       
                        </div>
                        <div class="col-lg-6">
                            <div class="about-content">
                                <div class="images-part">
                                <iframe src="https://www.slideshare.net/slideshow/embed_code/key/sTSs8xQNnrgGD6?hostedIn=slideshare&page=upload" width="700" height="430" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowFullScreen></iframe>
                                </div>
                                <div class="rs-animations">
                                    <div class="spinner dot">
                                        <img class="scale" src={about2} alt="Images"/>
                                    </div>
                                    <div class="spinner ball">
                                        <img class="dance2" src={about3} alt="Images"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
    )
}

export default Health
