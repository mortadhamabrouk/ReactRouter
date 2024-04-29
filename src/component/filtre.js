import React from 'react'
import ReactStars from 'react-rating-stars-component';
import './Filter.css';

const Filter = (props) => {
  return (

    <div filtre>


     
     <ReactStars 
     count={10}
     value={props.SearchRate}
     size={24}
     activeColor="#ffd700"
     onChange={(value)=>{props.setSearchRate(value)}} />
     <input type='text'placeholder='searsh'onChange={(event)=>props.titel(event.target.value)}></input>
     
    

    </div>
  )
}

export default Filter