import Navbar from './components/UI/Navbar';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import ProfessionalJourney from './components/pages/ProfessionalJourney';
import LicensesAndCertifications from './components/pages/LicensesAndCertifications';

const App = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ProfessionalJourney />
      <LicensesAndCertifications />
       <Services />
      <Contact />
    </div>
  );
};

export default App;
