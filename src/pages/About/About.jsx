import React from 'react';
import "./About.css";
import videogames from "../../images/videogames.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {videogames} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1' style={{color:'white'}}>About AcessibleGames</h2>
            <p className='fs-17'style={{color:'white'}}>Welcome to AccessibleGames, where we believe that gaming should be an inclusive experience for everyone, regardless of their abilities. Our mission is to provide a comprehensive resource for disabled gamers to discover and explore games that are accessible and enjoyable for them.

At AccessibleGames, we understand the importance of accessibility in gaming. We recognize that traditional barriers such as mobility, vision, hearing, and cognitive impairments can significantly impact an individual's gaming experience. That's why we're dedicated to curating a collection of games that prioritize accessibility features, ensuring that all gamers can play without limitations.

Our team is composed of passionate gamers and accessibility advocates who are committed to making gaming more inclusive. We work tirelessly to research, review, and categorize games based on their accessibility features, allowing users to find titles that suit their specific needs and preferences.

What sets AccessibleGames apart is our dedication to transparency and user empowerment. We provide detailed accessibility information for each game in our library, including customizable features, control options, subtitles, audio cues, and more. This allows users to make informed decisions about which games are best suited for them.

Furthermore, we actively engage with developers to advocate for greater accessibility in gaming. By fostering dialogue and collaboration within the gaming community, we strive to push the industry towards creating more inclusive experiences for all players.

Whether you're a disabled gamer seeking accessible titles or an ally interested in learning more about accessibility in gaming, AccessibleGames is here to support you every step of the way.

Thank you for joining us on our journey to make gaming truly accessible to all.</p>
<p style={{color:'white'}}>
Sincerely</p>
<p style={{color:'white'}}>AccessibleGames Team.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
