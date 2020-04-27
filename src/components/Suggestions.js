import React from 'react'

//restituons nos résultats 
const Suggestions = (props) => {
  const options = props.results.map(item => (
    <li key={item.title}>
      {item.vote_average}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions;