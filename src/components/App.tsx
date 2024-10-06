import { useState } from "react";
import { fetchYoutubeAPI } from "../helpers/youtubeAPI";
import { IVideo } from "../interfaces/video.interface";

function App() {
  const [videos, setVideos] = useState<IVideo[]>([]);

  const [searchTerms, setSearchTerms] = useState("");

  const fetchVideos = () => {
    fetchYoutubeAPI(setVideos);
  };

  return (
    <>
      test
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

        <button type="submit">Fetch videos</button>
      </form>
      <div>
        <p style={{ color: "var(--color-white" }}>Test</p>

        <p style={{ color: "var(--color-offwhite-100" }}>Test</p>
        <p style={{ color: "var(--color-offwhite-500" }}>Test</p>
        <p style={{ color: "var(--color-offwhite-900" }}>Test</p>

        <p style={{ color: "var(--color-offblack-100" }}>Test</p>
        <p style={{ color: "var(--color-offblack-500" }}>Test</p>
        <p style={{ color: "var(--color-offblack-900" }}>Test</p>

        <p style={{ color: "var(--color-lightblue-100" }}>Test</p>
        <p style={{ color: "var(--color-lightblue-500" }}>Test</p>
        <p style={{ color: "var(--color-lightblue-900" }}>Test</p>

        <p style={{ color: "var(--color-secondaryblue-100" }}>Test</p>
        <p style={{ color: "var(--color-secondaryblue-500" }}>Test</p>
        <p style={{ color: "var(--color-secondaryblue-900" }}>Test</p>

        <p style={{ color: "var(--color-secondarygreen-100" }}>Test</p>
        <p style={{ color: "var(--color-secondarygreen-500" }}>Test</p>
        <p style={{ color: "var(--color-secondarygreen-900" }}>Test</p>

        <p style={{ color: "var(--color-secondaryturquoise-100" }}>Test</p>
        <p style={{ color: "var(--color-secondaryturquoise-500" }}>Test</p>
        <p style={{ color: "var(--color-secondaryturquoise-900" }}>Test</p>

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
