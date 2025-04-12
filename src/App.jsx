import { Routes, Route } from 'react-router-dom';

import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import VidyavrikshArticlesPage from './sections/Media.jsx';
import Courses from './sections/Courses.jsx';
import Robotics from './sections/Robotics.jsx';
import PhilosophySection from './sections/PhilosophySection.jsx';
import Exams from './sections/Exams.jsx';

const HomePage = () => (
  <>
    <Navbar />
    <About />
    <Projects />
    <Clients />
    <WorkExperience />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <div className="bg-white min-h-screen text-white">
  <main className="max-w-7xl mx-auto">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/media" element={<VidyavrikshArticlesPage />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/robotics" element={<Robotics />} />
      <Route path="/philosophy" element={<PhilosophySection />} />
      <Route path="/exams" element={<Exams />} />
    </Routes>
  </main>
</div>

  );
};

export default App;
