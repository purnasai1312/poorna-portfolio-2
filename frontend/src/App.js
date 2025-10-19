import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Achievements from "./components/Achievements";
import TechStackTimeline from "./components/TechStackTimeline";
import InteractiveTechStack from "./components/InteractiveTechStack";
import Projects3D from "./components/Projects3D";
import CodeShowcase from "./components/CodeShowcase";
import TerminalWindow from "./components/TerminalWindow";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Achievements />
          <TechStackTimeline />
          <InteractiveTechStack />
          <Projects3D />
          <TerminalWindow />
          <CodeShowcase />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
