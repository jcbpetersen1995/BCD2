import React from "react";
import "../css/colorBlockOne/index.css";
import podcastImage from "../images/podcast.jpeg";
import { Container } from "reactstrap";
import { BsFillMicFill } from "react-icons/bs";
import { MdDeveloperMode, MdRecordVoiceOver } from "react-icons/md"
import { FiBook } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

function ColorBlockOne() {
  return (
    <section className="colorBlock">
      <img src={podcastImage} className="podcastImage" alt="Podcast Image" />
      <Container className="header">
        <h1 className="dom">What We Can Do For You</h1>
        <h5 className="sub"> - DA Media Services - </h5>
        <br />
        <ul className="list">
        <li className="liDom"><BsFillMicFill className="li-icons" />Podcast Editing & Production</li>
          <li className="liSub">
            <span className="emphasis">Our Clients:</span> How Not To Be An
            Idiot Podcast, The Boulderista, The Seeking Financial Freedom Show,
            and The Prize Fighting Business Show
          </li>
          <li className="liDom"><MdDeveloperMode className="li-icons"/>Web Development</li>
          <li className="liSub">Full-Stack Mobile-First Websites and Applications - <span className="emphasis">Personalized for You</span> </li>
          <li className="liDom"><FiBook className="li-icons"/>Audiobook Narration & Production</li>
          <li className="liSub">Narration, Production, or <span className="emphasis">Both</span></li>
          <li className="liDom"><MdRecordVoiceOver className="li-icons"/>Voice-Over Services</li>
          <li className="liSub">Podcast Ads<span className="emphasis">,</span> Radio<span className="emphasis">,</span> Commercials</li>
        </ul>
        <IoIosArrowDown className="arrowDownTwo"/>
      </Container>
      
    </section>
  );
}

export default ColorBlockOne;
