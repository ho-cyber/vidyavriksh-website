import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import { Typewriter } from 'react-simple-typewriter';


import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import SplineModel from '../components/SplineModel.jsx';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-24 mt-12 c-space gap-6 px-4 z-10 relative">
        <h1 className="text-5xl sm:text-7xl font-bold text-white text-center leading-tight">
        Empowering Minds, Enriching Futures
        </h1>
        <p className="text-xl sm:text-2xl text-black text-center max-w-3xl mx-auto h-16">
  <Typewriter
    words={[
      'Master Math and Science with Confidence',
      'Dive into Robotics and Coding',
      'Get Ahead with Competitive Exam Preparation',
    ]}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={50}
    deleteSpeed={30}
    delaySpeed={2000}
  />
</p>
      </div>

      <div className="w-full h-full absolute inset-0 z-0">
        <SplineModel url='https://prod.spline.design/dm93SWWx57WyONkL/scene.splinecode'/>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Whatsapp Us" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
