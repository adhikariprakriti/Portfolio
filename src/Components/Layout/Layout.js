import React from 'react';
import './Layout.css';
import Sidebar from '../Sidebar/Sidebar';

function Layout(props) {
  return (
    <div className="Layout">
        <Sidebar/>
        <div className="main">
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
           {props.children}
        </div>
    </div>
  );
}

export default Layout;
