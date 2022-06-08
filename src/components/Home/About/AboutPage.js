import React from "react";
import "./About.css";
import about1 from "../../../images/about/solutions/1.jpg";
import about2 from "../../../images/about/solutions/2.png";
import about3 from "../../../images/about/solutions/3.png";
import Navbar from "../Toolsbar/Navbar/Navbar";
import Footer from "../Footer/Footer";
function AboutPage() {
    
  return (
    <div>
    <Navbar></Navbar>
    <div id="rs-about" class="rs-about style10 gray-bg5 p-5">
     
      <div class="" style={{ width: "90%", margin: "auto" }}>
        <div class="row">
          <div class="col-lg-6 pr-70 md-pr-15 md-mb-50">
            <div class="sec-title4 mb-30">
              <h1 style={{ color: "#f79a2a" }}>About Us</h1>

              <p class="margin-0">
                Mogod Group is a diverse group of companies with subsudiaries in
                healthcare solutions, ICT and general supplies.We help our
                clients solve their business challenges through allocating
                professional expertise and offer solutions to their problems. We
                also club solutions to give an overall satisfaction and meet our
                client’s expectations. Mogod group of companies was established
                in 2021 and our goal is to grow in all aspects and see that our
                client’s needs are met with their expectations, Our Company
                prides itself in establishing this three subsediaries and
                growing the business through ensuring our clients access
                excemplary services .For more detailed information follow the
                links under each subscediary and read more about the individual
                subcediary provide, Find us at our head office is situated in
                Nairobi City
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content">
              <div class="images-part">
                <img src={about1}  alt="Images" />
              </div>
              <div class="rs-animations">
                <div class="spinner dot">
                  <img class="scale" src={about2} alt="Images" />
                </div>
                <div class="spinner ball">
                  <img class="dance2" src={about3} alt="Images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default AboutPage;
