import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, HelpCircle, Hammer, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


const philosophies = [
  {
    title: "Understanding is key to learning",
    description:
      "When students grasp concepts deeply, they begin to enjoy the subject and grow confident in their abilities.",
    icon: <Lightbulb className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Curiosity drives learning",
    description:
      "Your child’s questions are the starting point. We nurture their natural curiosity to explore and discover more.",
    icon: <HelpCircle className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Encourage your child to build",
    description:
      "From imagination to creation — we help children bring their ideas to life, turning curiosity into capability.",
    icon: <Hammer className="w-8 h-8 text-pink-500" />,
  },
  {
    title: "Competitive Exam Preparation",
    description:
      "Introduce your child to Olympiads and talent search exams early on, boosting confidence and logical thinking.",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
  },
];

const PhilosophySection = () => {
    const navigate = useNavigate();

  return (
    
    <section className="py-28 px-4 bg-gradient-to-b from-white via-gray-50 to-white text-black">
     
      <div className="max-w-6xl mx-auto text-center">
      <Navbar/>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Our Philosophy
        </h2>
        <button
  onClick={() => navigate('/')}
  className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white bg-black/70 backdrop-blur-md px-4 py-2 rounded-full hover:bg-black/80 transition-all shadow-md"
>
  ← Back
</button>

        <p className="text-lg text-pink-500 max-w-2xl mx-auto mb-16 leading-relaxed">
          Every child is unique. We provide a space for them to explore, build,
          and express — unlocking their creativity through guided learning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="backdrop-blur-md bg-white/60 border border-white/30 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
