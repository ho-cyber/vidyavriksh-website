import React from 'react';
import InstaEmbed from '../components/InstaEmbed';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Robotics = () => {
    const navigate = useNavigate();

    const handleBack = () => {
      navigate('/');
    };
  return (
    <div className="min-h-screen bg-white p-4 mt-16">
      <Navbar/>
      <br/>
      <h1 className="text-4xl font-bold text-black mb-6 items-center">Vidyavriksh Participation at Robotics Events</h1>
      <button
        onClick={handleBack}
        className="mb-6 ml-4 text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition"
      >
        ← Back
      </button>
      <div className="flex flex-wrap gap-4">
        <InstaEmbed url='https://www.instagram.com/p/C5F4cl2pt4v/' text='BITS Quark 2024' />
        <InstaEmbed url='https://www.instagram.com/p/Cr0ODIUvYMw/' text='BITS Quark 2023' />
        <InstaEmbed url='https://www.instagram.com/p/C58dq4cNIjd' text='Tech Radiance IIT Bombay LFR Championship' />
        <InstaEmbed url='https://www.instagram.com/p/C4U6d5aJbCb/' text='Codeavour 2024'/>
      </div>
      <br />
      <br />
      <h1 className="text-4xl font-bold text-black mb-6 text-center">Vidyavriksh Robotics Workshops</h1>
      <div className="flex flex-wrap gap-4">
        <InstaEmbed url='https://www.instagram.com/p/C3fIYL7tzfK/' text='BITS Quark 2024 Bhatikar Workshop' />
     
      </div>

      <br />
        
      <h1 className="text-4xl font-bold text-black mb-6 text-center">Testimonials</h1>

    </div>
  );
};

export default Robotics;
