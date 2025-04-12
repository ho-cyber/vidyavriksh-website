
import React from 'react';
import Navbar from './Navbar';
import InstaEmbed from '../components/InstaEmbed';

const Exams = () => {
  return (
    <>
      <Navbar />

      <div className="mt-16 text-center text-black px-4">
        <h1 className="text-4xl mb-4">Vidyavriksh Participation in Competitive Exams</h1>
        <h3 className="text-2xl">Vidyavriksh students have been felicitated for their performance across various exams like MCT, GTSE, STSE and others.</h3>

       
      </div>
      <br />
     
     
   
      <div className="flex justify-center">
          <InstaEmbed url='https://www.instagram.com/p/DHn8qT2NSYu/' text='MCT 2024' />
        </div>    </>
  );
};

export default Exams;
