import React from 'react';
import Button from '@mui/material/Button';
import './Services.css';
import healthcare from "../../../images/whychooseus/icon/healthcare.png";
import ict from "../../../images/whychooseus/icon/ict.png";
import supply from "../../../images/whychooseus/icon/process.png";
import access from "../../../images/whychooseus/icon/access.png";
import upcoming from "../../../images/whychooseus/icon/upcoming.png";
import Footer from '../Footer/Footer';
import Service from './Service';
import Navbar from '../Toolsbar/Navbar/Navbar';



function ServicesPage() {
    return (
        <div>
        <div className="service-container" style={{marginTop:100}}>
            
            <div className="text-center pt-5 w-50 m-auto">
             
                <h2 style={{fontSize:'',color: "#f79a2a",fontFamily:'Bauhaus'}} >OUR SERVICES</h2>
            </div>

            <div className="row service">
            <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="service-box">
                <div className="icon-part">
                    <img src={healthcare} style={{ Width: '85%' }} alt="" />
                </div>
                <div className="details-part ml-2">
                 
                    <h4 style={{marginBottom:'5px',color:'#f79a2a',fontFamily:'Bauhaus'}}>Healthcare</h4>
                    <p>Our Company prides itself as a medical sales, distribution and service orientated company that was established back in 2014.</p>
                    <Button href="/health" style={{color:"#f79a2a"}}>More info...</Button>
                </div>
            </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12" >
            <div className="service-box">
                <div className="icon-part">
                    <img src={ict} style={{ Width: '85%' }} alt="" />
                </div>
                <div className="details-part ml-2">
                 
                    <h4 style={{marginBottom:'5px',color:'#f79a2a',fontFamily:'Bauhaus'}}>ICT</h4>
                    <p>We provide you with the best-in-class applications solutions for enterprises across industries.</p>
                    <Button href="/ict" style={{color:"#f79a2a"}}>More info...</Button>
                </div>
            </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="service-box">
                <div className="icon-part">
                    <img src={supply} style={{ Width: '85%' }} alt="" />
                </div>
                <div className="details-part ml-2">
                 
                    <h4 style={{marginBottom:'5px',color:'#f79a2a',fontFamily:'Bauhaus'}}>General Supplies</h4>
                    <p>Mogod Group also has a subsidiary that is a General Trading company that has vast network of professionals.</p>
                    <Button href="/supply" style={{color:"#f79a2a"}}>More info...</Button>
                </div>
            </div>
        </div>


        <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="service-box">
                <div className="icon-part">
                    <img src={upcoming} style={{ Width: '85%' }} alt="" />
                </div>
                <div className="details-part ml-2">
                 
                    <h4 style={{marginBottom:'5px',color:'#f79a2a',fontFamily:'Bauhaus'}}>Upcoming Projects</h4>
                    <p>We will deliver on your upcoming projects</p>
                    <Button href="#" style={{color:"#f79a2a"}}>More info...</Button>
                </div>
            </div>
        </div>
            </div>
           
        </div>
       
        </div>
      
    )
}

export default ServicesPage;
 

