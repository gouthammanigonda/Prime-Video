// Write your code here
import MovieItem from '../MovieItem'
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

  console.log(actionMovies, comedyMovies)
  return (
    <div className="main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image1"
      />
      <div className="container1">
        <h1 className="heading">Action Movies</h1>
        <div className="slider">
          <MoviesSlider movies={actionMovies} />
        </div>
        <h1 className="heading">Comedy Movies</h1>
        <div className="slider">
          <MoviesSlider movies={comedyMovies} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
