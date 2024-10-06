import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import GlobalStyles from "./components/GlobalStyles";

import { setupYoutubeAPI } from "./helpers/youtubeAPI.ts";

setupYoutubeAPI()
  .then(() => {
    console.log("GAPI setup successfull");
    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <GlobalStyles />
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

/*
  
  import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import GlobalStyles from "./components/GlobalStyles";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
*/
