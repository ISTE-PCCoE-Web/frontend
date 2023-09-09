//@ts-nocheck
import React from 'react';
import "./card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// The Card component receives a 'member' prop containing details about a team member
export default function Card(props) {
  let image_url_builder="https://drive.google.com/uc?export=view&id=";
  // image_url_builder+=props.member.imageUrl;
  // props.member.imageUrl=image_url_builder;
if(!props.member.imageUrl) props.member.imageUrl="https://robohash.org/hicveldicta.png?size=50x50&set=set1";
  return (  
    <div className="column">
      <div className="card">
        {/* Display the profile image */}
        <div className="img-container">
          <img src={image_url_builder+props.member.imageUrl} alt="" />
        </div>
        
        {/* Display the member's full name */}
        <h3>{props.member.firstname + " " + props.member.lastname}</h3>
        
        {/* Display the member's position */}
        <p>{props.member.position}</p>
        
        {/* Social media icons */}
        <div className="icons">
          {/* Display an email icon with a link if an email is available */}
          <a href={props.member.socials && props.member.socials.email} className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          
          {/* Display a LinkedIn icon with a link if a LinkedIn profile is available */}
          <a href={props.member.socials && props.member.socials.LinkedIn} className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          
          {/* Display a GitHub icon with a link if a GitHub profile is available */}
          <a href={props.member.socials && props.member.socials.Github} className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
}
