import React from 'react';
import Layout from '../Components/Layout/Layout';
import SingleProject from '../Components/SingleProject/SingleProject';
import './Projects.css';

function Projects() {
  return (
    <Layout>
      <div className="projects">
        <div className="projects__row">
           <SingleProject />
           <SingleProject />
           <SingleProject /> 
        </div>
        <div className="projects__row">
          <SingleProject />
          <SingleProject />
        </div>

       </div>
    </Layout>
  );
}

export default Projects;
