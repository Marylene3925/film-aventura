import React, {Components} from 'react';

//le composant : il y à un constructeur qui va initiatiliser 2 "state: isLoaded, items".c'est un tableau vide pour linstant
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
        items: []
      };
    }
  
   
    componentDidMount() {
     // fecth permet d'appeler notre api avec l'url
      fetch("https://api.themoviedb.org/4/list/1?page=1&api_key=12d9c0e3fda01905082fcc893d329dfc")
      .then(results => results.json())
        //quand l'url aura bien été appellée, isloaded passera à true et nos items vont être "result.items"
        .then(json => {
          this.setState({
              isLoaded : true,
              items: json, 
          })
       });
      }
        
    
    render() {
      const { error, isLoaded, items } = this.state;
      const chemin = 'https://image.tmdb.org/t/p/w500'      
 
      //sinon on lit chargement
      if (!isLoaded) {
        return <div>Chargement…</div>;
      }
      //Sinon on a un retourn d'une liste de ul et chacun de nos items est dans un "li"
       else {
        return (
         
          <div className="App">
          
              { console.log(items.results) }
          <table>
          <tr>
                       
              {items.results.map(item => (
                     <li className="border-bottom border-dark mb-5 pb-2">                      
                        <td><img src={chemin + item.poster_path} alt={item.title} /></td> 
                        <tr><td>{item.title}</td></tr>
                        <tr><td>{item.vote_average}</td></tr>
                     </li> 
                  ))
                  }
                
            
            </tr>
          </table>              
          </div>
         
      )
  }


}

}

  export default App;