import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const games = [
  {
    id: 1,
    title: "The Last of Us Part II",
    accessibility: ["Visual Impairments", "Hearing Impairments", "Motor Disabilities"],
    publisher: "Sony Interactive Entertainment",
    releaseDate: "June 19, 2020",
    description: "An action-adventure game set in a post-apocalyptic world where players control a young woman named Ellie as she seeks revenge against those who have wronged her. The game features various accessibility options such as high contrast modes, customizable subtitles, and audio cues for important information.",
    accessibilitySummary: {
      "Visual Impairments": "High contrast modes, customizable subtitles, and audio cues.",
      "Hearing Impairments": "Customizable subtitles and visual cues.",
      "Motor Disabilities": "Customizable controls and reduced reliance on precise timing."
    },
    imageLink: "https://archive.org/services/img/the-art-of-the-last-of-us-partii/full/pct:200/0/default.jpg",
    embeddedVideoLink: "https://www.youtube.com/embed/cxJWO3Dejj0?si=fmd6N48FsYZ9nEc3"
  },
  {
    id: 2,
    title: "Celeste",
    accessibility: ["Motor Disabilities", "Visual Impairments", "Hearing Impairments"],
    publisher: "Matt Makes Games",
    releaseDate: "January 25, 2018",
    description: "A platformer game where players control a young woman named Madeline as she climbs the titular Celeste Mountain. Celeste features accessibility options such as customizable controls, assist mode for easier gameplay, and text resizing options.",
    accessibilitySummary: {
      "Motor Disabilities": "Customizable controls and assist mode.",
      "Visual Impairments": "Text resizing options.",
      "Hearing Impairments": "Visual cues."
    },
    imageLink: "https://ewingsvoice.com/wp-content/uploads/2019/11/480274-celeste-nintendo-switch-front-cover.jpg",
    embeddedVideoLink: "https://www.youtube.com/embed/70d9irlxiB4?si=MawoLigTuiUCJGl0"
  },
  // Add more games with embeddedVideoLink as needed
];


const EmbeddedVideo = ({ videoUrl }) => {
  return (
    <div className="embedded-video">
      <iframe width="560" height="315" src={videoUrl} frameBorder="0" allowFullScreen title="Embedded Video"></iframe>
    </div>
  );
};

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  console.log("Requested Game ID:", id);

  // Convert id from string to number
  const gameId = parseInt(id);

  // Find the game with the given id
  const game = games.find(game => game.id === gameId);

  // Log the found game
  console.log("Found Game:", game);

  // Display loading if game is not found
  if (!game) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src={game?.imageLink || coverImg} alt="cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{game?.title}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Accessibility: </span>
              <span>{game?.accessibility.join(', ')}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Publisher: </span>
              <span>{game?.publisher}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Release Date: </span>
              <span>{game?.releaseDate}</span>
            </div>
            <div className='book-details-item description'>
            <span className='fw-6'>Description: </span>
              <span>{game?.description}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Accessibility Summary: </span>
              <ul>
                {Object.entries(game?.accessibilitySummary).map(([disability, summary], index) => (
                  <li key={index}><strong>{disability}: </strong>{summary}</li>
                ))}
              </ul>
            </div>
            {game?.embeddedVideoLink && <EmbeddedVideo videoUrl={game.embeddedVideoLink} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDetails;