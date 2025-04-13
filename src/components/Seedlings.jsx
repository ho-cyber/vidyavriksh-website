import React from "react";
import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";


const Seedlings = () => {
    return (
        <div className="flex justify-center w-full p-5">
        <div className="w-[800px]">
        <YouTubePlaylist
      apiKey="AIzaSyCa622EHwPWiJ51oqX8l88AJwxMPylYNgY"
      playlistId="PLSwo8ZmVlUBnBHqXZ11fieXGUtnywwZeY"
    />
        </div>
      </div>      
    );
  };
  
export default Seedlings;
//PLSwo8ZmVlUBnBHqXZ11fieXGUtnywwZeY