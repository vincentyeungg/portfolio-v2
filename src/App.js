import './App.css';

import Intro from './components/Intro/Intro';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import MyProjects from './components/MyProjects/MyProjects';
import ContactMe from './components/ContactMe/ContactMe';
import ClickForMore from './components/ClickForMore/ClickForMore';
import Footer from "./components/Footer/Footer";
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Intro />
      <Nav />
      <AboutMe />
      <Skills />
      <Experience />
      <ClickForMore category="resume" />
      <MyProjects />
      <ClickForMore category="github" />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
