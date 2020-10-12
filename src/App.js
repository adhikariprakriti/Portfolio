import React from 'react';
import './App.css';
import {  BrowserRouter,Route,Switch} from 'react-router-dom';
import Blog from './Blog/Blog';
import About from './About/About';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import SkillsAndExperience from './Skills and Experience/Skills and Experience';

function App() {
  return (
      <BrowserRouter>
           <Switch>
               <Route path='/' component={Home} exact/>
               <Route path='/blog' component={Blog} exact/>
               <Route path='/projects' component={Projects} exact/>
               <Route path='/skills' component={SkillsAndExperience} exact/>
               <Route path='/contact' component={Contact} exact/>
               <Route path='/about' component={About} exact/>
           </Switch>
      </BrowserRouter>
         
     );
}

export default App;
