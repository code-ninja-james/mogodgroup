import React from 'react';
import './Navbar.css';
import logo from '../../../../images/logo.png';

function Navbar() {
    return (
        <div className='stickyheader'>
            <div class="toolbar-area" style={{ borderBottom: '1px solid grey', color:'white' }}>
            <div class="row inner-tools-area" >
                <div className="col-md-2 toolsbar">
                    <ul className="text-left" style={{textAlign:'center'}}>
                        <li><a href="mailto:info@yourwebsite.com">info@mogodgroup.com</a></li>
                    </ul>
                </div>
                <div className="col-md-8 toolsbar" style={{borderLeft:'1px solid grey', borderRight:'1px solid grey'}}>
                    <ul className="d-flex justify-content-between">
                        <li><i class="fa fa-phone"></i><a href="tel:(+254) 724540740">(+254) 724540740</a></li>
                        <li class="opening"> <i class="fa fa-clock-o"></i> Mon - Fri: 9:00 am - 06.00pm / Closed on Weekends</li>
                    </ul>
                </div>
                <div className="col-md-2 toolsbar">
                    <ul className="d-flex justify-content-around">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="Navbar">
            
            <div class="row d-flex align-items-center" style={{ margin: 'auto'}}>
                <div className="col-md-4 toolsbar">
                    <img src={logo} alt="logo" />
                </div>
                <div className="col-md-7 navbar-list" style={{}}>
                    <ul className="d-flex justify-content-around ">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/projects">Portfolio</a></li>
                        <li><a href="/team">Team</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="col-md-1 toolsbar">
                    <div class="expand-btn-inner dots">
                        <ul className="d-flex justify-content-around">
                            
                            <li>
                                <a id="nav-expander" class="humburger nav-expander" href="#">
                                    <span class="dot1"></span>
                                    <span class="dot2"></span>
                                    <span class="dot3"></span>
                                    <span class="dot4"></span>
                                    <span class="dot5"></span>
                                    <span class="dot6"></span>
                                    <span class="dot7"></span>
                                    <span class="dot8"></span>
                                    <span class="dot9"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar
