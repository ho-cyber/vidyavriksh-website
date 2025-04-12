import React from "react";
import LiteYoutubeEmbed  from 'react-lite-youtube-embed'
import "react-lite-youtube-embed/dist/LiteYoutubeEmbed.css"

const YouTubePlaylist = () => {
    return (
        <div className="flex justify-center w-full p-5">
        <div className="w-[800px]">
          <LiteYoutubeEmbed 
            id="PLSwo8ZmVlUBnBHqXZ11fieXGUtnywwZeY"
            playlist={true}
          />
        </div>
      </div>      
    );
  };
  
export default YouTubePlaylist;
  