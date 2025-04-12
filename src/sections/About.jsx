import { useState } from 'react';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('adrian@jsmastery.pro');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="c-space my-20 px-4 xl:px-16" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-6">

        {/* Our Philosophy */}
        <div className="col-span-1 xl:row-span-3 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <img
            src="assets/grid1.png"
            alt="grid-1"
            className="w-full h-64 object-contain rounded-xl mb-4"
          />
          <p className="text-xl font-semibold text-gray-800 mb-2">Our Philosophy</p>
          <p className="text-gray-600 mb-4">
            Every child is unique and needs exposure and opportunity to express themselves. Through our programs, we provide a platform for the kid to learn, create and share.
          </p>
          <a
            href="/about"
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
          >
            Learn More <span>→</span>
          </a>
        </div>

        {/* Seedlings of Success */}
        <div className="col-span-1 xl:row-span-3 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <img
            src="../../seedlings-success.png"
            alt="grid-2"
            className="w-full h-64 object-contain rounded-xl mb-4"
          />
          <p className="text-xl font-semibold text-gray-800 mb-2">Seedlings Of Success</p>
          <p className="text-gray-600 mb-4">
            An inspiring talk series connecting Goan students with professionals from the Goan diaspora—sharing real stories, career insights, and motivation.
          </p>
          <a
            href="https://youtube.com/playlist?list=PLSwo8ZmVlUBnBHqXZ11fieXGUtnywwZeY&si=MYyvQwOideDc6XUg"
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
          >
            Watch Now <span>→</span>
          </a>
        </div>

        {/* Our Alumni */}
        <div className="col-span-1 xl:row-span-4 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex justify-center mb-4">
            <img
              src="../../alumni.jpg"
              alt="Alumni"
              className="w-32 h-auto rounded-full"
            />
          </div>
          <p className="text-xl font-semibold text-gray-800 mb-2 text-center">Our Alumni</p>
          <p className="text-gray-600 mb-4 text-center">
            Our alumni have gone on to pursue higher education at some of the most prestigious universities in India and around the world.
          </p>
          <div className="text-center">
            <a
              href="https://youtube.com/playlist?list=PLSwo8ZmVlUBnBHqXZ11fieXGUtnywwZeY&si=MYyvQwOideDc6XUg"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
            >
              See Profiles <span>→</span>
            </a>
          </div>
        </div>

        {/* Our Courses */}
        <div className="xl:col-span-2 xl:row-span-3 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <img
            src="assets/grid3.png"
            alt="Courses"
            className="w-full h-64 object-contain rounded-xl mb-4"
          />
          <p className="text-xl font-semibold text-gray-800 mb-2">Our Courses and Programs</p>
          <p className="text-gray-600 mb-4">
            We offer a wide range of courses tailored for learners of all ages and skill levels, ensuring everyone finds something valuable.
          </p>
          <a
            href="/about"
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
          >
            Learn More <span>→</span>
          </a>
        </div>

        {/* Our Blog */}
        <div className="xl:col-span-1 xl:row-span-2 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <img
            src="assets/grid4.png"
            alt="grid-4"
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <p className="text-xl font-semibold text-gray-800 mb-2">Our Blog</p>
          <a
            href="/about"
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
          >
            Read Now <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
