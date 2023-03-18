import React, {useState} from 'react';
// import "./App.css";


const VideoPlayer = () => {
  // const videoUrl = 'https://www.youtube.com/watch?v=8N8ZeOepQUM';
  const [showVideo, setShowVideo] = useState (false);
  
  const handlePlayButtonClick = () => {
    setShowVideo(true);
  };
  
  return (
    <div className='video'>
      {!showVideo && (
        <div className="play-button" onClick={handlePlayButtonClick} />
      )}
      {showVideo && (
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8N8ZeOepQUM" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
      )}
    </div>
  );
};

export default VideoPlayer;










