import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MediumFeed = ({ username }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const rssToJsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;
        const { data } = await axios.get(rssToJsonUrl);

        if (data.status === 'ok') {
          setArticles(data.items);
        }
      } catch (error) {
        console.error('Error fetching Medium RSS feed:', error);
      }
    };

    fetchArticles();
  }, [username]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {articles.map((article, index) => (
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-3">{article.description.replace(/<[^>]+>/g, '')}</p>
          <p className="text-blue-600 text-sm mt-3">Read more →</p>
        </a>
      ))}
    </div>
  );
};

export default MediumFeed;
