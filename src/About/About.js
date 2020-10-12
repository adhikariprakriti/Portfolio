import React from 'react';
import './About.css';
import Layout from '../Components/Layout/Layout';
import profile from '../Images/profile.jpg'

function About() {
  return (
    <div className="about">
      <Layout>
        <div className="container">
          <div className="description">
             <h1>About me</h1>
             <p>It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.</p>
      </div>
      <div className="image">
        <img src={profile} alt="profile"/>
      </div>
      </div>
      </Layout>
    </div>
  );
}

export default About;
