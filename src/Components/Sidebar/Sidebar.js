import React from 'react';
import './Sidebar.css';
import {AiFillHome,AiFillGithub,AiFillLinkedin} from "react-icons/ai";
import {MdEmail,MdPerson} from "react-icons/md";
import {BsEye} from "react-icons/bs";
import {FiSettings} from "react-icons/fi";
import {ImBlog} from "react-icons/im";
import {FaFacebookF} from "react-icons/fa";
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div className="sidebar">
        <ul className="navbar">
             <Link  to="/"><li ><AiFillHome/></li></Link>
             <Link to="/about"><li><MdPerson/></li></Link>
             <Link to="/skills"><li ><FiSettings/></li></Link>
             <Link to="/blog"><li><ImBlog/></li></Link>
             <Link to="/projects"><li><BsEye/></li></Link>
             <Link to="/contact"><li><MdEmail/></li></Link>
        </ul>
        <ul className="socialMedias">
          <Link to="https://github.com/prakriti75"><li><AiFillGithub/></li></Link>
          <Link to="https://www.linkedin.com/in/prakritiadhikari/"><li><AiFillLinkedin/></li></Link>
          <Link to="/blogs"> <li><FaFacebookF/></li></Link>
        </ul>
    </div>
  );
}

export default Sidebar;
