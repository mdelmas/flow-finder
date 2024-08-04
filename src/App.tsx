import { useState } from "react";
import "@/App.css";
import { fetchYoutubeAPI } from "./helpers/youtubeAPI";
import RangeSlider from "./components/RangeSlider";
import ToggleButtonGroup from "./components/ToggleButtonGroup";

import { IVideo } from "./interfaces/video.interface";

function App() {
  const [videos, setVideos] = useState<IVideo[]>([]);

  const [searchTerms, setSearchTerms] = useState("");
  const [videoLength, setVideoLength] = useState("");

  const fetchVideos = () => {
    fetchYoutubeAPI(setVideos);
  };

  const videoLengthOptions = [
    { id: "any", label: "any length", value: "any" },
    { id: "short", label: "less than 4 mins", value: "short" },
    { id: "medium", label: "between 4 and 20 mins", value: "medium" },
    { id: "long", label: "more than 20 mins", value: "long" },
  ];

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          fetchVideos();
        }}
      >
        <label htmlFor="name-field">Search</label>
        <input
          id="name-field"
          value={searchTerms}
          onChange={(event) => {
            setSearchTerms(event.target.value);
          }}
        />
        <RangeSlider label="Video length" />
        <button type="submit">Fetch videos</button>
      </form>

      <ToggleButtonGroup
        label="Video length"
        fieldName="videoLength"
        buttonOptions={videoLengthOptions}
      />

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
