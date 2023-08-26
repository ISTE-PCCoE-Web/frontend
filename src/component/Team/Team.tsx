import React from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin, faGit } from '@fortawesome/free-brands-svg-icons';
import "./team.css"

export default function Team() {
   let message = `There are many messages available for us to display here.`
   return (
    <div className="container">
        <section>
            <div className="row">
                <h1>Our Team</h1>
            </div>
            <div className="row">
            {/* Column 1 */}
                <div className="column">
                    <div className="card">
                        <div className="img-container">
                            <img src="profile-img-1.png" alt="" />
                        </div>
                        <h3>Luna Turner</h3>
                        <p>Founder</p>
                        <div className="icons">
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                    </div>
                </div>
            {/* Column 2 */}
                <div className="column">
                    <div className="card">
                        <div className="img-container">
                            <img src="profile-img-1.png" alt="" />
                        </div>
                        <h3>James Clark</h3>
                        <p>Developer</p>
                        <div className="icons">
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                    </div>
                </div>
            {/* Column 3 */}
                <div className="column">
                    <div className="card">
                        <div className="img-container">
                            <img src="profile-img-1.png" alt="" />
                        </div>
                        <h3>David Warner</h3>
                        <p>President</p>    
                        <div className="icons">
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
            {/* Column 1 */}
                <div className="column">
                    <div className="card">
                        <div className="img-container">
                            <img src="profile-img-1.png" alt="" />
                        </div>
                        <h3>Luna Turner</h3>
                        <p>Founder</p>
                        <div className="icons">
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                    </div>
                </div>
            {/* Column 2 */}
                <div className="column">
                    <div className="card">
                        <div className="img-container">
                            <img src="profile-img-1.png" alt="" />
                        </div>
                        <h3>James Clark</h3>
                        <p>Developer</p>
                        <div className="icons">
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                    </div>
                </div>
            {/* Column 3 */}
                <div className="column">
                    <div className="card">
                        <div className="img-container">
                            <img src="profile-img-1.png" alt="" />
                        </div>
                        <h3>David Warner</h3>
                        <p>President</p>    
                        <div className="icons">
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
