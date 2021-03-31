import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';

export default class SearchableMovieReviewsContainer extends Component {

  generateURL = (query="") => {
    return `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}`
    + `&api-key=${NYT_API_KEY}`
  }
  
  
  constructor(props) {
    super(props)
    this.state = {
      reviews: null,
      searchTerm: "harry"
    }
  }

  componentDidMount() {
    this.fetchMovies()
  }


  fetchMovies = () => {
    fetch(this.generateURL(this.state.searchTerm))
    .then(resp => resp.json())
    .then(json => this.setState({reviews: json.results}))
  }

  handleChange = e => {
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.fetchMovies()
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" onChange={e => this.handleChange(e)}/>
          <input type="submit" value="submit"/>
        </form>
        <MovieReviews data={this.state.reviews} />
      </div>
    )
  }
}
