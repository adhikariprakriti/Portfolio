import React from 'react';
import './SingleProject.css';
import jwt from '../../Images/jwt.jpg';

const SingleProject=()=>{
    return(
        <div className="container"> 
          <div className="card">
            <div className="box">
              <div className="content">
                  <img src={jwt} alt="project"/>
                  <div className="project__info">
                      <h2>Project Name</h2>
                      <p>Project description</p>
                      <p>Uses : React, Node.Js</p>
                   </div>
                   <div className="project__showcase">
                    <span>Live</span>
                    <span>|</span>
                    <span>Demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default SingleProject;