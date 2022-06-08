import React,{useState,useEffect} from 'react'
import Navbar from './Toolsbar/Navbar/Navbar'
import Toolsbar from './Toolsbar/Toolsbar';
import './Home.css'
import Slider from './Slider/Slider';
import Features from './Features/Features';
import About from './About/About';
import Services from './Services/Services';
import SkillSet from './SkillSet/SkillSet';
import Team from './Team/Team';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Blogs from './Blogs/Blogs';
import ProjectSummary from './ProjectSummary/ProjectSummary';
import Projects from './Projects/Projects';



function Home() {
   const [navbar,setNavbar]=useState(false);
    
   

//     const changeBackground=()=>{
// console.log(window.scrollY)
//     };
//     window.addEventListener('scoll',changeBackground)
    return (
        <div>
          
             
            <Navbar ></Navbar>
            <div className="nav-header">
            <Slider></Slider>
        </div>
        <Features></Features>
        <About></About>
        <Services></Services>
        <Projects></Projects>
       
        <ProjectSummary></ProjectSummary>
        <SkillSet></SkillSet>
        <Team></Team>
        <Contact></Contact>
        <Blogs></Blogs>
        <Footer></Footer>
        </div>
    )
    
    }
export default Home
