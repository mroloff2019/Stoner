import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';


// need to find a better way to pass the props to Home
function App() {
  const elRefs = {
    welcomeRef : useRef(null),
    roadMapRef : useRef(null),
    teamRef : useRef(null),
  }

  const scrollToEl = (elRef) => elRef.current.scrollIntoView()
  return (
    <>
    <Router>
      <Navbar elRefs={elRefs} scrollToEl={scrollToEl} />
      <Switch>
        <Route path='/' exact render={(props) => <Home { ...props } elRefs={elRefs} />} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
