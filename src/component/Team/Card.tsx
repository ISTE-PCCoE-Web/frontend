//@ts-nocheck
import React from 'react';
import "./card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// The Card component receives a 'member' prop containing details about a team member
export default function Card(props) {
  return (
    <div className="column">
      <div className="card">
        {/* Display the profile image */}
        <div className="img-container">
          <img src={props.member.image} alt="" />
        </div>
        
        {/* Display the member's full name */}
        <h3>{props.member.firstName + " " + props.member.lastName}</h3>
        
        {/* Display the member's position */}
        <p>{props.member.position}</p>
        
        {/* Social media icons */}
        <div className="icons">
          {/* Display an email icon with a link if an email is available */}
          <a href={props.member.socials && props.member.socials.email} className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          
          {/* Display a LinkedIn icon with a link if a LinkedIn profile is available */}
          <a href={props.member.socials && props.member.socials.linkedin} className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          
          {/* Display a GitHub icon with a link if a GitHub profile is available */}
          <a href={props.member.socials && props.member.socials.github} className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
}
