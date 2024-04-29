
import { Link } from 'react-router-dom';
import React from 'react';
import './MovieCard.css';
import { Card } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';

const MovieCard = (props) => {
  return (
    <div className='film-container'>
      <Link to={`/donnee/${props.movies.Name}`}>
      <Card>
        <Card.Img variant="top" src={props.movies.image} />
        <Card.Body>
          <Card.Title>{props.movies.Name}</Card.Title>
          <Card.Text>
            {props.movies.description}
          </Card.Text>
          <Card.Text>
            Note: {props.movies.note}
          </Card.Text>
          <ReactStars
            count={10}
            value={props.movies.note}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
        </Card.Body>
      </Card>
      </Link>
    </div>
  );
};

export default MovieCard;