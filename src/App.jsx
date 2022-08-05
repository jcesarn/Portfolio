import './App.css';
import Header from './components/Header';
import HomeDescription from './components/HomeDescription.jsx';
import HomeKnowledge from './components/HomeKnowledge';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import PageFooter from './components/PageFooter';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='home-page' id='home'>
        <HomeDescription/>
        <HomeKnowledge/>
      </div>
      <div className='about-page' id='about'>
        <About/>
      </div>
      <div className='experience-page' id='experience'>
        <Experience/>
      </div>
      <div className='projects-page' id='projects'>
        <Projects/>
      </div>
      <div className='contact-page' id='contact'>
        <Contacts/>
      </div>
      <PageFooter/>
    </div>
  );
}

export default App;
