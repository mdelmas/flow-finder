import { gapi } from "gapi-script";
import { Dispatch, SetStateAction } from "react";
import { IVideo } from "../interfaces/video.interface";

const fetchYoutubeAPI = (
  setSearchResult: Dispatch<SetStateAction<IVideo[]>>
) => {
  /*
  useEffect(() => {
    if (!isGapiLoaded) return;

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
  }, []);
  */

  gapi.client.youtube.search
    .list({
      part: ["snippet"],
      maxResults: 6,
      q: "yoga|sleep|yin|yin yoga", // search terms : add '|' for OR
      relevanceLanguage: "en", // language code ISO 639-1 : "fr", "en"
      type: "video",
      videoDuration: "long", // any, long, medium, short
      videoEmbeddable: "true",
    })
    .then(
      function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response.result);

        const videos: IVideo[] = response.result.items!.map((item) => {
          return {
            id: item.id!.videoId!,
            title: item.snippet!.title!,
          };
        });
        console.log(videos);
        setSearchResult(videos);
      },
      function (err) {
        console.error("Execute error", err);
      }
    );
};

export default fetchYoutubeAPI;
