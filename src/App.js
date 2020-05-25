import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import HtmlCss from './pages/HtmlCss/HtmlCss';
import JS from './pages/JS/JS';
import GameDev from './pages/GameDev/GameDev';
import Arduino from './pages/Arduino/Arduino';
import Scratch from './pages/Scratch/Scratch';
import DigitalArt from './pages/DigitalArt/DigitalArt';

function App() {
  return (
    <div>
  
    <Router>
 
        <Route exact path="/" component={HomePage} />
        <Route path="/htmlcss" component={HtmlCss} />
        <Route path="/js" component={JS} />
        <Route path="/gamedev" component={GameDev} />
        <Route path="/arduino" component={Arduino} />
        <Route path="/scratch" component={Scratch} />
        <Route path="/digitalart" component={DigitalArt} />

      
      </Router>

    </div>

    
  );
}

export default App;
