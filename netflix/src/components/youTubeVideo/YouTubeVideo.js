import React from 'react';
import YouTube from 'react-youtube';

function YouTubeVideo(props) {

    const opts = {
        height: '320',
        width: '320',
        playerVars: {
          autoplay: 1,
        },
      };

    return (
        <div>
            <YouTube videoId={props.trailerID} opts={opts} />
        </div>
    )
}

export default YouTubeVideo;
