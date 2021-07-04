import './App.css';

import Intro from './components/Intro/Intro';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import MyProjects from './components/MyProjects/MyProjects';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
      <Intro />
      <AboutMe />
      <Skills />
      <Experience />
      <MyProjects />
      <ContactMe />
    </div>
  );
}

export default App;
