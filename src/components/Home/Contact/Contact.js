import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import Navbar from "../Toolsbar/Navbar/Navbar";
import Footer from "../Footer/Footer";
function Contact() {

  const [state, handleSubmit] = useForm("xyyovgwq");
  if (state.succeeded) {
      return <p>Thanks for contacting!</p>;
  }
  return (
    <div >
      <Navbar></Navbar>
    <div id="rs-contact" class="rs-contact style5 modify1 gray-bg5">
      <div class="" style={{ width: "90%", margin: "auto" }}>
        <div
          class="contact-us"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div class="row margin-0">
            <div class="col-lg-8" style={{ marginRight: "-30px" }}>
              <div class="contact-widget">
                <div class="sec-title5 pt-5 pb-5">
                  <span class="sub-title new-title">Contact Us</span>
                  <h2 class="title title2">Get In Touch</h2>
                </div>
                <div id="form-messages"></div>
                <form id="contact-form"  onSubmit={handleSubmit}>
                  <fieldset>
                    <div class="row">
                      <div class="col-lg-6 mb-3 col-md-6 col-sm-6">
                        <input
                          class="from-control"
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Name"
                          required=""
                        
                        />
                        
                      </div>
                      <div class="col-lg-6 mb-3 col-md-6 col-sm-6">
                        <input
                          class="from-control"
                          type="text"
                          id="email"
                          name="email"
                          placeholder="E-Mail"
                          required=""
                        />
                      </div>
                      <div class="col-lg-6 mb-3 col-md-6 col-sm-6">
                        <input
                          class="from-control"
                          type="text"
                          id="phone"
                          name="phone"
                          placeholder="Phone Number"
                          required=""
                        />
                      </div>
                      <div class="col-lg-6 mb-3 col-md-6 col-sm-6">
                        <input
                          class="from-control"
                          type="text"
                          id="Website"
                          name="subject"
                          placeholder="Your Website"
                          required=""
                        />
                      </div>

                      <div class="col-lg-12 mb-3">
                        <textarea
                          class="from-control"
                          id="message"
                          name="message"
                          placeholder="Your message Here"
                          required=""
                        ></textarea>
                      </div>
                    </div>
                    <div class="btn-part">
                      <div class="form-group">
                        <input
                          class="readon2 submit-btn con-btn"
                          type="submit"
                          value="Submit Now"
                        />
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
            <div class="col-lg-4 padding-0">
              <div class="contact-box">
                <div class="sec-title2 mb-4">
                  <h2 class="title small white-color">Contact Info</h2>
                </div>
                <div class="address-box mb-4 ">
                  <div class="box-icon">
                    <i class="fa fa-map-marker"></i>
                  </div>
                  <div class="address-text">
                    <span class="label">Kenya Office</span>
                    <p class="desc">
                      Abacus lane baba dogo road go down b1,
                      <br />
                     Kenya.
                    </p>
                  </div>
                </div>
                <div class="address-box mb-4 ">
                  <div class="box-icon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <div class="address-text">
                    <span class="label">Telephone</span>
                    <p class="desc">
                      <a href="1235558888">p: (+254) 724540740</a>
                    </p>
                  </div>
                </div>
                <div class="address-box mb-4 ">
                  <div class="box-icon">
                    <i class="fa fa-envelope"></i>
                  </div>
                  <div class="address-text">
                    <span class="label">Mail Us</span>
                    <p class="desc">
                      <a href="#">E: info@mogodgroup.com</a>
                    </p>
                  </div>
                </div>
                <div class="address-box mb-4">
                  <div class="box-icon">
                    <i class="fa fa-clock-o"></i>
                  </div>
                  <div class="address-text">
                    <span class="label">Kenya Office</span>
                    <p class="desc">
                      Abacus lane baba dogo road go down b1,
                      <br />
                      Nairobi
                    </p>
                  </div>
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

export default Contact;
