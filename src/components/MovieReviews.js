import React, { Component } from 'react';
import 'isomorphic-fetch';

const MovieReviews = props => {
  return (
    <div className="review-list">
      {props.data ? 
        props.data.map((rev, i) => {
          return (
            <div className="review" key={i}> 
              <h2>{rev.headline}</h2>
              <ul>
                <li>{rev.byline}</li>
              </ul>
            </div>
          )
        }) : null
      }
    </div>
  )
}


export default MovieReviews