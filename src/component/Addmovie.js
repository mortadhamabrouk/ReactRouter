import React, { useRef } from 'react'
import './Addmovies.css';
const Addmovies = (props) => {
const Name=useRef()
const Description=useRef()
const image=useRef()
const note=useRef()


  return (
    <div newfilm>

        <label>Titel</label>
        <input type='txt'placeholder='Add Titel'ref={Name}></input>
        <label>Description</label>
        <input type='txt'placeholder='Add Description'ref={Description}></input>
        <label>Image url</label>
        <input type='txt'placeholder='Add Image url'ref={image}></input>
        <label>Rating</label>
        <input type='txt'placeholder='Add Note'ref={note}></input>
  
        <button  onClick={()=>{props.setMovies([...props.movies,
        {
        "Name":Name.current.value,
        "description":Description.current.value,
        "image": image.current.value,  
        "note":note.current.value,}])}}>
          Add
                </button>

    </div>
  )
}

export default Addmovies