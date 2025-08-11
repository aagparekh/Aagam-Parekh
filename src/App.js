import './App.css';
import About from './component/About';
import Contacts from './component/Contacts';
import Education from './component/Education';
import Header from './component/Header';
import Interests from './component/Interests.js';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import Skills from './component/Skills';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Navbar/>
    <Header/>
    <About/>
    {/* <Education/> */}
    <Projects/>
    <Skills/>
    {/* <Interests/> */}
    <Contacts/>
    </Router>
  );
}

export default App;
