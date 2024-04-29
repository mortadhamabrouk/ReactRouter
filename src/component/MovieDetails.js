import React from 'react';
import './MovieDetails.css';
import { Link, useParams } from 'react-router-dom';


const MovieDetails = (props) => {
  const params = useParams();
  console.log(params)

  
let x=props.movies.find(el=>el.Name==params.name)
  return (
    <div className="movie-details-container">

      <h1>{x.Name}</h1>
      <img src={x.image}></img> 
      {x.thriller}
      

      <Link to='/'>home</Link>
      
    </div>
  );
};

export default MovieDetails;