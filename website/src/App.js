import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Team from "./Components/Team";
import Navbar from "./Components/Navbar.js"
import Home from "./Components/Home";
import News from "./Components/News.js";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

export default function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <Projects />
            <Team />  
            <News />
            <Contact />
        </div>
    )
};
