import React from 'react';
import './Home.css';
import Layout from '../Components/Layout/Layout'
import Button from '../Components/Button/Button'


function Home() {
  return (
    <Layout>
       <div className="main">
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          <div id="introduction">
              <div id="title">
                 <span>Hi,</span>
                 <br/>
                 <span>I am Prakriti Adhikari ,</span>
                 <br/>
                 <span>Full Stack Web Developer</span>
                 <div className="contactButton">
                   <Button name="Contact me ! "/>
                 </div>
               </div>  
          </div>
       </div>
    </Layout>
  );
}

export default Home;
