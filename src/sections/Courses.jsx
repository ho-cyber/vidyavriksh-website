import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const courses = [
  {
    title: "Pre-JEE 1",
    mode: "Online",
    description:
      "A deep dive into foundational and advanced math and science concepts for Class 9-10 students, enhancing problem-solving skills and preparing them for JEE.",
  },
  {
    title: "Pre-JEE 2",
    mode: "Online",
    description:
      "In-depth exploration of JEE-level concepts through rigorous practice with past year questions and conceptual deep dives.",
  },
  {
    title: "Beginners - Class 6 to 8",
    mode: "Hybrid",
    description:
      "Building strong fundamentals in STEM topics like the decimal system, with contextual learning that aligns with school curriculum.",
  },
  {
    title: "Intermediate - Class 6 to 8",
    mode: "Hybrid",
    description:
      "Bridging core concepts with advanced applications to foster long-term retention and critical thinking.",
  },
];

const CourseCard = ({ title, mode, description }) => {
  const isOnline = mode === "Online";
  const badgeStyles = isOnline
    ? "bg-blue-100 text-blue-700"
    : "bg-green-100 text-green-700";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
      <Navbar/>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeStyles}`}
        >
          {mode}
        </span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const Courses = () => {
  const navigate = useNavigate();

  const onlineCourses = courses.filter((course) => course.mode === "Online");
  const hybridCourses = courses.filter((course) => course.mode === "Hybrid");

  return (
    <div className="min-h-screen bg-gray-50 text-black px-6 py-12 sm:px-10 mt-16">
     

      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-14">
        Our Courses
      </h1>
      <button
  onClick={() => navigate('/')}
  className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white bg-black/70 backdrop-blur-md px-4 py-2 rounded-full hover:bg-black/80 transition-all shadow-md"
>
  ← Back
</button>
      

      {/* Online Courses */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">
          Online Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {onlineCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </section>

      {/* Hybrid Courses */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-green-600">
          Hybrid Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hybridCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
