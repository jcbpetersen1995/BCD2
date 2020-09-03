import React from "react";
import "../css/buttons/index.css";

function PodcastButton() {
  return (
    <a href="/">
      <button className="servicesButton">Podcast: Plans & Pricing</button>
    </a>
  );
}

function AudiobookButton() {
  return (
    <a href="/">
      <button className="servicesButton">Audiobook: Plans & Pricing</button>
    </a>
  );
}

function VoiceOverButton() {
  return (
    <a href="/">
      <button className="servicesButton">Voice-Over: Plans & Pricing</button>
    </a>
  );
}

function WebDevButton() {
  return (
    <a href="/">
      <button className="servicesButton">Web Dev: Plans & Pricing</button>
    </a>
  );
}

export { PodcastButton, AudiobookButton, VoiceOverButton, WebDevButton };
