// import React from "react";

import { useEffect } from "react";
import { gapi } from "gapi-script";

const API_KEY = "AIzaSyCtOSNrWHt6a8se93R8J3LQmz4j0UUQORM";

let isGapiLoaded = false;

const useFetchYoutubeAPI: () => null = () => {
  console.log("in useFetchYoutubeAPI");

  console.log(gapi.client);

  // useEffect(() => {
  // gapi.load("client", () => {
  //   gapi.client.setApiKey(API_KEY);
  //   return gapi.client
  //     .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
  //     .then(
  //       function () {
  //         console.log("GAPI client loaded for API");
  //         isGapiLoaded = true;
  //       },
  //       function (err) {
  //         console.error("Error loading GAPI client for API", err);
  //       }
  //     );
  // });
  // }, []);

  // useEffect(() => {
  //   if (!isGapiLoaded) return;

  //   gapi.client.youtube.search
  //     .list({
  //       part: ["snippet"],
  //       maxResults: 25,
  //       q: "yoga|sleep|yin|yin yoga", // search terms : add '|' for OR
  //       relevanceLanguage: "en", // language code ISO 639-1 : "fr", "en"
  //       type: "video",
  //       videoDuration: "long", // any, long, medium, short
  //       videoEmbeddable: "true",
  //     })
  //     .then(
  //       function (response) {
  //         // Handle the results here (response.result has the parsed body).
  //         console.log("Response", response);
  //       },
  //       function (err) {
  //         console.error("Execute error", err);
  //       }
  //     );
  // }, []);

  gapi.client.youtube.search
    .list({
      part: ["snippet"],
      maxResults: 25,
      q: "yoga|sleep|yin|yin yoga", // search terms : add '|' for OR
      relevanceLanguage: "en", // language code ISO 639-1 : "fr", "en"
      type: "video",
      videoDuration: "long", // any, long, medium, short
      videoEmbeddable: "true",
    })
    .then(
      function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
      function (err) {
        console.error("Execute error", err);
      }
    );

  return null;
};

export default useFetchYoutubeAPI;
