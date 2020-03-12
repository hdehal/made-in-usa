import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faBootstrap, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCloud, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <div className="mainContainer">
            <Alert variant="primary">
                <Alert.Heading>About the List</Alert.Heading>
                <p>
                    Over a decade ago, I took a challenge to slowly convert my wardrobe to entirely "Made in USA" clothing. The goals were numerous — from having fewer items of higher-quality clothing that would last longer, to voting with my wallet in support of fair wages, supply chain transparency, and against adverse working conditions abroad. Unfortunately, not all companies listed have their entire product portfolio American-made — the only requirement is that some product(s) should be manufactured in the USA, regardless of domestic or foreign materials. Please feel free to <NavLink to={`${process.env.PUBLIC_URL}/add`}>add</NavLink> to the list!
                 </p>
                <hr />
                <p className="mb-0">
                    This is a personal coding project built as a Single Page Application (SPA) using <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faReact} /> React</a>, <a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</a>, and  <a href="https://react-leaflet.js.org/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMapMarkerAlt} /> Leaflet</a> with a <a href="https://www.mongodb.com/cloud/atlas" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCloud} /> Cloud MongoDB service</a>. Open source and proudly hosted on <a href="https://github.com/hdehal/made-in-usa" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub</a>.
            </p>
            </Alert>
        </div>
    );
}

export default About;