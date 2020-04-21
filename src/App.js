import React, {Component } from "react";
import "./App.css";
import ListFilms from "./components/Films"


function App() {
  return (    
    <div className="films text-center">
       
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <img src="logo.png" alt="logo" className="img-logo"></img>
            <ul class="navbar-nav mr-auto">          
              {/* <li class="nav-item active mt-3">
                <a class="nav-link" href="#">Films <span class="sr-only">(current)</span></a>
              </li> */}       
            </ul>
            
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>            
            </form>          
        </div>
        
      </nav>
      
      <div className="film-img"><ListFilms></ListFilms></div>
    </div>
  );
}


export default App;
