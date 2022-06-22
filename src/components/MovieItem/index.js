// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetail} = props
  const {id, thumbnailUrl, videoUrl, categoryId} = movieDetail
  return (
    <div key={id}>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="each-image" />
        }
      >
        {close => (
          <div className="popup-container">
            <button
              testid="closeButton"
              onClick={() => close()}
              className="close-btn"
            >
              <IoMdClose />
            </button>

            <div className="react-player">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
