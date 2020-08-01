import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import NavBar from './Components/NavBar';
import Error from "./Components/Error";
import Anime from "./Components/Anime";
import Detalle from "./Components/Detalle"


function App() {



  return (
    <Router>
    <NavBar/>
    <Switch>
      <Route exact path="/">Home 123</Route>
      <Route exact path="/anime"><Anime /></Route>
      <Route exact path="/anime/:id"><Detalle /></Route>
      <Route exact path="/manga">Routersss12234</Route>
      <Route><Error /></Route>
    </Switch >
  </Router>
  ) 
}

export default App;
