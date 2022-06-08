import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Home/About/About";
import ServicesPage from "./components/Home/Services/ServicesPage";
import Projects from "./components/Home/Projects/Projects";
import TeamPage from "./components/Home/Team/TeamPage";
import Blogs from "./components/Home/Blogs/Blogs";
import Contact from "./components/Home/Contact/Contact";
import Ict from "./components/Home/Ict/ict";
import Health from "./components/Home/healthcare/healthcare";
import Supply from "./components/Home/general-supply/supply";
import AboutPage from "./components/Home/About/AboutPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/about"  element={<AboutPage/>} />
        <Route path="/services"  element={<ServicesPage/>} />
        <Route path="/projects"  element={<Projects />} />
        <Route path="/team"  element={<TeamPage/>} />
        <Route path="/blog"  element={<Blogs />} />
        <Route path="/contact"  element={<Contact />} />
         <Route path="/supply"  element={<Supply />} />
        <Route path="/health"  element={<Health />} />
        <Route path="/ict"  element={<Ict />} />
        <Route path="/home"  element={<Home/>} />
        <Route path="/"  element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
