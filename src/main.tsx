import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { setupYoutubeAPI } from "./helpers/youtubeAPI.ts";

setupYoutubeAPI()
  .then(() => {
    console.log("GAPI setup successfull");
    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
  .catch((error) => {
    console.log("Error during GAPI setup", error);
    // TO DO, handle error properly
    // <React.StrictMode>
    //   <App isGapiLoaded={false} />
    // </React.StrictMode>;
  });
