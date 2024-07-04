import { gapi } from "gapi-script";

const API_KEY = "AIzaSyCtOSNrWHt6a8se93R8J3LQmz4j0UUQORM";

const setupGapi = () => {
  return new Promise((resolve, reject) => {
    gapi.load("client", () => {
      gapi.client.setApiKey(API_KEY);
      gapi.client
        .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(
          () => resolve(null), // onFulfilled
          (error) => reject(error) // onRejected
        );
    });
  });
};

export default setupGapi;
