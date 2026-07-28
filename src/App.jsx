import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/UI/LoadingScreen';
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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
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
    </>
  );
};

export default App;
