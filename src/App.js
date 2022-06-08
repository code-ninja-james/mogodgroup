import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Home/About/About";
import Services from "./components/Home/Services/Services";
import Projects from "./components/Home/Projects/Projects";
import Team from "./components/Home/Team/Team";
import Blogs from "./components/Home/Blogs/Blogs";
import Contact from "./components/Home/Contact/Contact";
import Ict from "./components/Home/Ict/ict";
import Health from "./components/Home/healthcare/healthcare";
import Supply from "./components/Home/general-supply/supply";

function App() {
  return (
    <>
      <Routes>
        <Route path="/about"  element={<About />} />
        <Route path="/services"  element={<Services />} />
        <Route path="/projects"  element={<Projects />} />
        <Route path="/team"  element={<Team />} />
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
