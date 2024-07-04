import { useState } from "react";
import "@/App.css";
import fetchYoutubeAPI from "./hooks/useFetchYoutubeAPI";

import { IVideo } from "./interfaces/video.interface";

function App() {
  const [videos, setVideos] = useState<IVideo[]>([]);

  console.log(videos);

  const fetchVideos = () => {
    fetchYoutubeAPI(setVideos);
  };

  return (
    <>
      <button onClick={fetchVideos}>Fetch videos</button>
      <div>
        {videos.map((video) => (
          <p key={video.id}>
            <a href={`https://www.youtube.com/watch?v=${video.id}`}>
              {video.id} - {video.title}
            </a>
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
