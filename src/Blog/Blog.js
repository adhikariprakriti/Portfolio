import React from 'react';
import './Blog.css';
import Layout from '../Components/Layout/Layout';
import jwt from '../Images/jwt.jpg';
import react from '../Images/react.png';
import SingleBlog from '../Components/SingleBlog/SingleBlog';

function Blog() {
  return (
    <Layout>
      <SingleBlog image={jwt}/>
      <SingleBlog image={react}/>
    </Layout>
  );
}

export default Blog;
