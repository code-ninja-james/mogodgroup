import React from 'react';
import './Slider.css';
import supplies from '../../../images/slider/solution/1st.png';
import ict from '../../../images/slider/solution/2nd.png';
import  healthcare from '../../../images/slider/solution/3rd.png';
import Button from '@mui/material/Button';

function Slider() {
    return (
        <div className='slider-container' >
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner row">
                    <div class="carousel-item active">
                        <div className="row slide-part">
                            <div className="col-md-6 col-sm-12">
                                <div className="slide-des" style={{ textAlign: 'left', margin: 'auto', paddingLeft: '10%' }}>
    
                                    <h2 className="text-white" style={{fontFamily:'Bauhaus'}} >HEALTH CARE</h2>
                                    <h3 style={{color:'#f79a2a',fontFamily:'Bauhaus'}}>Medical equipments &</h3>
                                    <h4  style={{color:'#f79a2a',}}>consumable supplies company</h4>
                                    <Button href="/health" style={{color:"white"}}>More info...</Button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={healthcare} className="slide-image" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row slide-part">
                            <div className="col-md-6 col-sm-12">
                                <div className="slide-des" style={{ textAlign: 'left', margin: 'auto', paddingLeft: '10%' }}>
                                    <h2 className="text-white" style={{fontFamily:'Bauhaus'}}>ICT</h2>
                                    <h3 style={{color:'#f79a2a'}}>Systems & applications</h3>
                                    <h4 style={{color:'#f79a2a'}}>development company</h4>
                                    <Button href="/ict" style={{color:"white"}}>More info...</Button>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={ict} className="slide-image" alt="" />
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div className="row slide-part">
                            <div className="col-md-6 col-sm-12">
                                <div className="slide-des" style={{ textAlign: 'left', margin: 'auto', paddingLeft: '10%' }}>
                                    <h2 className="text-white" style={{fontFamily:'Bauhaus'}}>GENERAL SUPPLIES</h2>
                                    <h3 style={{color:'#f79a2a'}}>Farm products, stationeries &</h3>
                                    <h4 style={{color:'#f79a2a'}}> electronics company</h4>
                                    <Button href="/supply" style={{color:"white"}}>More info...</Button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={supplies} className="slide-image" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Slider
