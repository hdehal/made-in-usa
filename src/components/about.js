import React from 'react';
import Alert from 'react-bootstrap/Alert'

const About = () => {
    return (
        <div className="mainContainer">
            <Alert variant="primary">
            <Alert.Heading>About the List</Alert.Heading>
            <p>
                Over ten years ago, I took a challenge to slowly convert my wardrobe to entirely "Made in USA" clothing. The goals were numerous — from having fewer items of clothing that would both last longer and feel higher quality, to making a political statement for fair wages, supply chain transparency, and against adverse working conditions abroad. 
            </p>
            <hr />
            <p className="mb-0">
                This is a personal coding project built as a Single Page Application (SPA) using <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a> with a <a href="https://www.mongodb.com/cloud/atlas" target="_blank" rel="noopener noreferrer">cloud MongoDB service</a>. Open source and proudly hosted on <a href="https://github.com/hdehal/made-in-usa" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
            </Alert>
        </div>
    );
}

export default About;