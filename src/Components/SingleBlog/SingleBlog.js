import React from 'react';
import './SingleBlog.css';

function SingleBlog({title,date,image}) {
  return (
    <div className="actualblock">
       <a  href="/">
         <span className="actualImg">
           <img src={image} alt="blog"/>
         </span>
         <span className="actualInfo">
           <span className="date">2078/7/7</span>
           <br/>
           <span className="blogTitle">Login and Registration using javascript web token</span>
           <br/>
           <span className="border"></span>
         </span>
       </a>
       </div>
  );
}

export default SingleBlog;
