import React from 'react';

const About = () => {
    return (
        <div className='About Content'>
            <div className='about-me'>
                <h2>About App</h2>
                <p>Made By <a className="link" href="https://apoorvnema.pro" target='_blank' rel="noreferrer">Apoorv Nema &#8599;</a></p>
                <p>Version : 1.0</p>
                <p style={{ display: "flex" }}><a className="link" rel="noreferrer" href="https://linkedin.com/in/apoorvnema" target='_blank'>LinkedIn Profile &#8599;</a></p>
                <p style={{ display: "flex" }}><a className="link" rel="noreferrer" href="https://github.com/apoorvnema/pioneer-labs-assessment" target='_blank'>GitHub Repository &#8599;</a></p>
            </div>
        </div>
    );
};

export default About;
