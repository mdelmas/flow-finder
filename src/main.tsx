import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import setupGapi from "./setupGapi.ts";

setupGapi()
  .then(() => {
    console.log("GAPI setup successfull");
    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <App isGapiLoaded={true} />
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
