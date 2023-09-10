import React, { useState } from "react";
import "../../styles/Home.css";

export default function Home() {

  const [isLoading, setIsLoading] = useState(false);
  const [isInvalid, setisInvalid] = useState(false);
  const [vidTitle, setVidTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [channelTitle, setChannelTitle] = useState("");
  const [vidResult, setVidResult] = useState(false);
  const [vidId , setVidId] = useState('')

  //delete after
  const [links, setLinks] = useState([]);

  function extractVideoIdFromUrl(url) {
    const standardFormatRegex = /[?&]v=([^&]+)/;
    const shortFormatRegex = /youtu\.be\/([^?&]+)/;

    const standardMatch = url.match(standardFormatRegex);
    if (standardMatch) {
      return standardMatch[1];
    }

    const shortMatch = url.match(shortFormatRegex);
    if (shortMatch) {
      return shortMatch[1];
    }

    return null;
  }

  const fetchData = async (videoId) => {
    try {
      const result = await fetch(
        `http://localhost:3001/api/fetchAvailableQuilities?videoId=${videoId}`
      );
      const data = await result.json();

      console.log(data);

      setThumbnail(data.thumbnail);
      setVidTitle(data.videoTitle);
      setChannelTitle(data.channelTitle);
      setLinks(data.qualities);

      setVidResult(true);
    } catch (error) {
      setisInvalid(true);
      setVidResult(false);
      console.error("Error fetching data:", error);
    }

    setIsLoading(false);
  };

  const handleOnPaste = (value) => {

    setisInvalid(false);
    setIsLoading(true);
    setVidTitle("");
    
    const extractedVideoId = extractVideoIdFromUrl(value);
    setVidId(extractedVideoId)

    if (extractedVideoId) {
      fetchData(extractedVideoId);
    } else {
      console.error("Invalid YouTube URL");
      setisInvalid(true);
      setIsLoading(false);
      setVidResult(false);
    }
  };

  const downloadBtns = () => {
    return links.map((link, index) => {
      const downloadUrl = `http://localhost:3001/api/downloadVideo?videoId=${vidId}&itag=${link[2]}`;
      return (
        <a
          className="download-button"
          key={index}
          href={downloadUrl}
        >
          {`${link[0]}.${link[1]}`}
        </a>
      );
    });
  };
  

  return (
    <div className="home">
      <h1>Welcome to VidCatch</h1>
      <h2>Download your favorite YouTube videos effortlessly.</h2>
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleOnPaste(e.target.value);
          }
        }}
        onPaste={(e) => {
          handleOnPaste(e.clipboardData.getData("text/plain"));
        }}
        className="url-input"
        type="text"
        placeholder="Paste link here"
      />

      {isLoading && <div className="loader"></div>}
      {isInvalid && <p className="invalid-url">invalid url</p>}
      {vidResult && (
        <div className="result-container">
          <div className="vid-description-container">
            <img src={thumbnail} className="thumbnail" alt="thubnail" />
            <span className="vid-title">{vidTitle}</span>
            <span className="vid-channel">By {channelTitle}</span>
          </div>
          <div className="vid-download-info">
            <span>Download links,</span>
            {downloadBtns()}
          </div>
        </div>
      )}
    </div>
  );
}
