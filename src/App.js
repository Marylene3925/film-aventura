import React, {Component } from "react";
import "./App.css";
import ListFilms from "./components/Films"

// function App() {
//   return (
//     <div className="films">
//       <ListFilms></ListFilms>
//     </div>
//   );
// }

class App extends Component{
  render (){
    return (
      <div className="films">
      <ListFilms></ListFilms>      
    </div>
    )
  }
}

export default App;
