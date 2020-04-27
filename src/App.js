import React, {Component } from "react";
import "./App.css";

import ListFilms from "./components/Films"
import Search from "./components/Search"




function App() {
  return (    
    <div className="films text-center">
       
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <img src="logo.png" alt="logo" className="img-logo"></img>
            <ul className="navbar-nav mr-auto">          
              {/* <li className="nav-item active mt-3">
                <a className="nav-link" href="#">Films <span className="sr-only">(current)</span></a>
              </li> */}       
            </ul>
            
            <div className="film-img"><Search></Search></div>
            
                     
        </div>
        
      </nav>
      
      <div className="film-img"><ListFilms></ListFilms></div>
    </div>
    
  );
}

export default App;
