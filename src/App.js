import './App.css';

import Intro from './components/Intro/Intro';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import MyProjects from './components/MyProjects/MyProjects';

function App() {
  return (
    <div className="App">
      <Intro />
      <AboutMe />
      <Skills />
      <MyProjects />
    </div>
  );
}

export default App;
