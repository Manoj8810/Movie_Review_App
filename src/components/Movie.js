import React from 'react'

const Movie = (props) => {
  return (
    <div className="movie">
        
        <img src={props.img} alt="" />
        <p>Name: {props.title}</p>
        <p>Runtime: {props.runtime}</p>
        <p>Year: {props.year}</p>
    </div>
  )
}

export default Movie
