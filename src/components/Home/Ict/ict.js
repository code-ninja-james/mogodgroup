import React, { useState } from "react";
import "./ict.css";
import about2 from "../../../images/about/solutions/2.png";
import about3 from "../../../images/about/solutions/3.png";
import parking from "../../../images/parking.jpg";

import Navbar from '../Toolsbar/Navbar/Navbar';
import Toolsbar from '../Toolsbar/Toolsbar';

function Ict() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
  return (
    <div style={{height :"100%"}}>
    <div>
        <div className="nav-header">
     <Toolsbar></Toolsbar>
     <Navbar ></Navbar>
    
 </div>
    </div>
    <div id="rs-about" class="rs-about style10 gray-bg5 p-5 body bg background" style={{height:1000}}  >
    
      <div class="" style={{ width: "100%", margin: "auto" }}>
        <div class="row">
          <div class="pr-70 md-pr-15 md-mb-50">
            <div class="sec-title4 mb-30">
              <h1 class="new pb-10" style={{ color: "#f79a2a" }}>
                ICT
              </h1>
             
            </div>
            <div id="accordion" class="accordion">
              <div class="card">
                <div class="card-header">
                  <h2>
                    <a
                      class="card-link"
                      data-toggle="collapse"
                      href="#collapseOne"
                      style={{ color: "#12ace9" }}
                    >
                      Systems and Applications
                    </a>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  class="collapse show"
                  data-parent="#accordion"
                >
                   <div id="rs-about" class="rs-about style10 gray-bg5 p-5">
         
         <div class="" style={{width: '90%', margin: 'auto'}}>
             <div class="row">
                 <div class="col-lg-6 pr-70 md-pr-15 md-mb-50">
                     <div class="sec-title4 mb-30">
                     <div class="new pb-10" >
                     Being among the top systems and applications development companies in Kenya, we provide you with the best-in-class applications solutions for enterprises across industries. Hire the best applications developers from us and transform your innovative idea and business with transformationalsystems.
       </div>
                      
                     
                    
                     </div>
                 </div>
                 <div class="col-lg-6">
                     <div class="about-content">
                         <div class="images-part">
                         <iframe src="https://www.slideshare.net/slideshow/embed_code/key/ALMQWKMVUMcG6f?hostedIn=slideshare&page=upload"   width="476"
                      height="430"
                      frameborder="0"
                      marginwidth="0"
                      marginheight="0"
                      scrolling="no"
                      allowFullScreen></iframe>
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
              </div>
              <div class="card">
                <div class="card-header">
                  <h2>
                    <a
                      class="collapsed card-link"
                      data-toggle="collapse"
                      href="#collapseTwo"
                      style={{ color: "#12ace9" }}
                    >
                      Hotel Management System
                    </a>
                  </h2>
                </div>
                <div id="collapseTwo" class="collapse" data-parent="#accordion">
                
                    <div id="rs-about" class="rs-about style10 gray-bg5 p-5">
         
                <div class="" style={{width: '90%', margin: 'auto'}}>
                    <div class="row">
                        <div class="col-lg-6 pr-70 md-pr-15 md-mb-50">
                            <div class="sec-title4 mb-30">
                            <div class="new pb-10" >
                            Smart system and processes helps you to build a replicable hotel business model
              </div>
                             
                            
                             
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-content">
                                <div class="images-part">
                                <iframe
                      src="https://www.slideshare.net/slideshow/embed_code/key/1fI7BnutOkGVTa?hostedIn=slideshare&page=upload"
                      width="476"
                      height="430"
                      frameborder="0"
                      marginwidth="0"
                      marginheight="0"
                      scrolling="no"
                      allowFullScreen
                    ></iframe>
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
              </div>

              <div class="card">
                <div class="card-header">
                  <h2>
                    <a
                      class="card-link"
                      data-toggle="collapse"
                      href="#collapseThree"
                      style={{ color: "#12ace9" }}
                    >
                      Parking Management System
                    </a>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse show"
                  data-parent="#accordion"
                >
                   <div id="rs-about" class="rs-about style10 gray-bg5 p-5">
         
         <div class="" style={{width: '90%', margin: 'auto'}}>
             <div class="row">
                 <div class="col-lg-6 pr-70 md-pr-15 md-mb-50">
                     <div class="sec-title4 mb-30">
                     <div class="new pb-10" >
                     A park management system refers to the innovative technologies providing solutions in the parking industry. Managing car parks isn’t an easy task for companies and organizations because there are lots of moving parts including traffic and the availability of spaces. It is a time-consuming task, requires human labor, and is inefficient. Using our parking management system, will help reduce business’s administrative overhead on parking and reduce the impact of their parking space on their local community.
       </div>
                      
                     
                       
                     </div>
                 </div>
                 <div class="col-lg-6">
                     <div class="about-content">
                         <div class="images-part">
                         <iframe
                      src="https://www.slideshare.net/slideshow/embed_code/key/qsGFV6noKX8C55?hostedIn=slideshare&page=upload"
                      width="476"
                      height="430"
                      frameborder="0"
                      marginwidth="0"
                      marginheight="0"
                      scrolling="no"
                      allowFullScreen
                    ></iframe>
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
              </div>

              <div class="card">
                <div class="card-header">
                  <h2>
                    <a
                      class="card-link"
                      data-toggle="collapse"
                      href="#collapseFour"
                      style={{ color: "#12ace9" }}
                    >
                      ERP
                    </a>
                  </h2>
                </div>
                <div
                  id="collapseFour"
                  class="collapse show"
                  data-parent="#accordion"
                >
                   <div id="rs-about" class="rs-about style10 gray-bg5 p-5">
         
         <div class="" style={{width: '90%', margin: 'auto'}}>
             <div class="row">
                 <div class="col-lg-6 pr-70 md-pr-15 md-mb-50">
                     <div class="sec-title4 mb-30">
                     <div class="new pb-10">
                     In a competitive market place it is extremely important to deliver outstanding customer service even for the smallest transactions. Our Customer Relationship Management (CRM) system allows you not only to track your customer records instantly, but to update them in real time across the whole company. This means your staff have the latest information at their fingertips.
       </div>
                      
                     
                    
                     </div>
                 </div>
                 <div class="col-lg-6">
                     <div class="about-content">
                         <div class="images-part">
                         <iframe
                      src="https://www.slideshare.net/slideshow/embed_code/key/Hs48O4uczn2zhU?hostedIn=slideshare&page=upload"
                      width="600"
                      height="430"
                      frameborder="0"
                      marginwidth="0"
                      marginheight="0"
                      scrolling="no"
                      allowFullScreen
                    ></iframe>
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
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
   
    </div>
  );
}

export default Ict;
const myStyle={
  backgroundImage: 
"url('../../../images/polygon.svg')",
  height:'100vh',
  marginTop:'-70px',
  fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};


  
