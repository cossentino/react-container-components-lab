import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here


export default class LatestMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: null
    }
  }

  componentDidMount() {
    this.fetchMovies()
  }


  fetchMovies = () => {
    return fetch(URL)
    .then(resp => resp.json())
    .then(json => this.setState({reviews: json.results}))
  }

  mapMovies = () => {
    return this.state.reviews.map((rev, i) => {
      return (
      <div key={i}> 
        <h2>{rev.headline}</h2>
        <ul>
          <li>{rev.byline}</li>
        </ul>
      </div>
      )
    })
  }

  movieReviewJSX = () => {
    return (
      <div id="movies-container">
        {this.mapMovies()}
      </div>)
  }


  render() {
    return (
      <div className="latest-movie-reviews">
        {this.state.reviews !== null ? <MovieReviews data={this.state.reviews} /> : <MovieReviews data={[]} />}
      </div>
    )
  }
}
