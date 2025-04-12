import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');
  const [youtubeID] = useState('YvY-9AUPZW0');

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">

        <div className="flex justify-center items-center mt-10">
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-xl"
              title="YouTube player"
              sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
              src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
