import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

import YouTubePlaylist from '../components/Seedlings';
import MediumFeed from '../components/MediumPull';

import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Seedlings from '../components/Seedlings';

const articles = [
  {
    title: "VidyaVriksh sprouts to shower knowledge",
    source: "Herald Goa",
    link: "https://www.heraldgoa.in/review/na/vidyavriksh-sprouts-to-shower-knowledge/126401",
    description: "Discusses Vidyavriksh's child-oriented approach aimed at fostering independent thinking and problem-solving skills.",
    date: "7 years ago"
  },
  {
    title: "Connecting Goan youth with real-world mentors",
    source: "The Navhind Times",
    link: "https://www.navhindtimes.in/2024/09/13/magazines/kuriocity/connecting-goan-youth-with-real-world-mentors/",
    description: "Highlights the 'Seedlings of Success' initiative that connects Goan students with professionals.",
    date: "6 months ago"
  },
  {
    title: "Goa CM Pramod Sawant meets edu officials to find ways to improve students’ performance",
    source: "The Times of India",
    link: "https://timesofindia.indiatimes.com/city/goa/cm-meets-edu-officials-to-find-ways-to-improve-students-performance/articleshow/93739626.cms",
    description: "Covers discussions led by the Chief Minister featuring insights from Vidyavriksh’s learning companion.",
    date: "2.6 years ago"
  },
  {
    title: "NEP is a good start but are we ready for it, asks Dr Abhijit Nadkarni",
    source: "The Goan",
    link: "https://www.thegoan.net/goa-news/%EF%BB%BFnep-is-a-good-start-but-are-we-ready-for-it-asks-dr-abhijit-nadkarni/118831.html",
    description: "Covers a conversation on NEP facilitated by Vidyavriksh’s 'Seedlings of Success' series.",
    date: "6 months ago"
  },
  {
    title: "Education By Example",
    source: "Business Goa",
    link: "https://www.facebook.com/businessgoa/posts/pfbid02CVcTDprSZU4mrUTHGhWJqULt2dsRkGFoThXng7PZtZhFi5LQwtrcRxeKfn2Gqwjjl",
    description: "How Vidyavriksh used Competitive coaching to introduce Critical Thinking and self-learning to students.",
    date: "8 years ago"
  },
  {
    title: "Beyond the classroom",
    source: "The Goan",
    link: "https://www.thegoan.net//beyond-the-classroom/42771.html",
    description: "Highlights a collaboration with Mushtifund Saunstha to create a co-learning space focused on life skills.",
    date: "7 years ago"
  }
];

const socials = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/vidyavriksh.goa',
    icon: <FaFacebookF className="text-white text-2xl" />,
    bg: 'bg-blue-600',
    text: 'Vidyavriksh India',
  },
  {
    name: 'Instagram (Vidyavriksh)',
    url: 'https://www.instagram.com/vidyavriksh.india/',
    icon: <FaInstagram className="text-white text-2xl" />,
    bg: 'bg-pink-500',
    text: 'Vidyavriksh India',
  },
  {
    name: 'Instagram (Podcast)',
    url: 'https://www.instagram.com/theseedlingspodcast/',
    icon: <FaInstagram className="text-white text-2xl" />,
    bg: 'bg-gradient-to-r from-pink-500 to-yellow-500',
    text: 'The Seedlings Podcast',
  },
];

const ArticleCard = ({ title, source, link, description, date }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-white shadow hover:shadow-lg rounded-xl p-5 border border-gray-200 transition"
  >
    <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
    <p className="text-sm text-gray-500 italic mb-2">{source} — {date}</p>
    <p className="text-sm text-gray-800">{description}</p>
  </a>
);

const VidyavrikshArticlesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 pb-20 mt-16">
      <Navbar />

      <div className="max-w-7xl mx-auto mt-10">
        

        <h1 className="text-4xl font-bold text-center text-black mb-10">Vidyavriksh in the News</h1>
        <button
          onClick={() => navigate('/')}
          className="mb-6 text-sm text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          ← Back
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <ArticleCard key={idx} {...article} />
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center text-black mb-10">Watch Seedlings of Success</h2>
          <Seedlings />
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center text-black mb-10">Our Blog</h2>
          <MediumFeed username="siddharajmopkar" />
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-black mb-6">Connect with Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {socials.map((social, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center bg-black p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 flex items-center justify-center rounded-full ${social.bg} hover:scale-105 transition`}
                >
                  {social.icon}
                </a>
                <p className="mt-3 text-sm text-white">{social.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VidyavrikshArticlesPage;
