import logo from './logo.svg';
import './App.css';
import {Nav} from './component/Navbar/Nav';
import Hero from './component/Hero/Hero';
import AboutMe from './component/About me/AboutMe';
import SkillSet from './component/Skills/SkillSet';
import Projects from './component/Project/Projects';
import Experience from './component/Experience/Experience';
import Contact from './component/Contact/Contact';

function App() {
  return (

    <>

        <Nav/>
        <Hero/>
        <AboutMe/>
        <SkillSet/>
        <Projects/>
        <Experience/>
        <Contact/>
        

    </>

  );
}

export default App;
