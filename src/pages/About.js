import React from 'react';

const About = () => {
    return (
        <div className='About Content'>
            <div className='about-me'>
                <h2>About App</h2>
                <p>Made By <a className="link" href="https://apoorvnema.pro">Apoorv Nema &#8599;</a></p>
                <p>Version : 1.0</p>
                <p style={{ display: "flex" }}><a className="link" href="https://linkedin.com/in/apoorvnema">LinkedIn Profile &#8599;</a></p>
                <p style={{ display: "flex" }}><a className="link" href="https://github.com/apoorvnema/AI-Factory">GitHub Repository &#8599;</a></p>
            </div>
        </div>
    );
};

export default About;
