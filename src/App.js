import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Transport from './components/Transport/Transport';

function App() {
  const navStyle = {
    marginBottom:'80px',
    paddingTop:'30px',
   
 }
  return (
    <div className="App">
      {/* <Home></Home>
      <Login></Login> */}

<Router>
        <nav class="container navbar navbar-expand-lg navbar-light " style={navStyle}>
        <h2>Comfort Rider</h2>
          <ul className="ml-auto">
            
            <div className="nav">
              <li >
                <Link className="nav-link text-dark" to="/home">Home</Link>
              </li>
              <li>
                <Link className="nav-link text-dark" to="/login">Destination</Link>
              </li>
              <li>
                <Link className="nav-link text-dark" to="/blog">Blog</Link>
              </li>
              <li>
                <Link className="nav-link text-dark" to="/contact">Contact</Link>
              </li>
              <li>
                <Link className="nav-link " to="/login"><button className="btn btn-danger">Login</button></Link>
              </li>
            </div>
          </ul>
        </nav>

        
      <Switch> 
      <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/transport/">
              <Transport />
          </Route>
      </Switch>
    </Router>
    </div>

    
  );
}

export default App;
