import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';

import { myProjects } from '../constants/index.js';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="my-20 py-20 bg-white relative">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
        Our Mentors
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Meet the brilliant minds guiding our journey
      </p>

      <div className="w-full flex justify-center mt-16">
        <div className="w-full max-w-6xl flex flex-col gap-12 items-center p-12 shadow-xl shadow-gray-200 rounded-3xl bg-white border border-gray-200 relative transition-all duration-300">

          {/* Subtle image background effect */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Mentor Logo */}
          <div className="z-10 transform hover:scale-105 transition-transform duration-300">
            <div
              className="p-8 w-fit rounded-3xl bg-gray-50 border border-gray-200"
              style={currentProject.logoStyle}
            >
              <img
                className="w-72 h-72 object-contain hover:rotate-3 transition-transform duration-500"
                src={currentProject.logo}
                alt="logo"
              />
            </div>
          </div>

          {/* Mentor Text */}
          <div className="flex flex-col gap-4 text-center text-gray-800 z-10">
            <p className="text-3xl font-semibold animatedText">{currentProject.title}</p>
            <p className="text-lg animatedText text-gray-700">{currentProject.desc}</p>
            <p className="text-base animatedText text-gray-600">{currentProject.subdesc}</p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center w-full max-w-xs z-10">
            <button
              className="p-3 bg-black hover:bg-gray-200 rounded-full border border-gray-300 transition"
              onClick={() => handleNavigation('previous')}
            >
              <img src="left-arrow.png" alt="left arrow" className="w-5 h-5" />
            </button>

            <button
              className="p-3 bg-black hover:bg-gray-200 rounded-full border border-gray-300 transition"
              onClick={() => handleNavigation('next')}
            >
              <img src="right-arrow.png" alt="right arrow" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
