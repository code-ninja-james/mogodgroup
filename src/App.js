import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Home/About/About";
import ServicesPage from "./components/Home/Services/ServicesPage";
import Projects from "./components/Home/Projects/Projects";
import TeamPage from "./components/Home/Team/TeamPage";
import Blogs from "./components/Home/Blogs/Blogs";
import ContactPage from "./components/Home/Contact/ContactPage";
import Ict from "./components/Home/Ict/ict";
import Health from "./components/Home/healthcare/healthcare";
import Supply from "./components/Home/general-supply/supply";
import AboutPage from "./components/Home/About/AboutPage";
import BlogPage from "./components/Home/Blogs/BlogPage";
import ProjectsPage from "./components/Home/Projects/ProjectsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/about"  element={<AboutPage/>} />
        <Route path="/services"  element={<ServicesPage/>} />
        <Route path="/projects"  element={<ProjectsPage />} />
        <Route path="/team"  element={<TeamPage/>} />
        <Route path="/blog"  element={<BlogPage />} />
        <Route path="/contact"  element={<ContactPage />} />
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
