// Write your code here.
import './index.css'

const ThumbnaillItem = props => {
  const {imagesListDetails, setActiveThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesListDetails

  const onActiveThumbnail = () => {
    setActiveThumbnail(id)
  }

  const activeThumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  return (
    <li className="thumbnail-item">
      <button
        className="thumbnail-button"
        type="button"
        onClick={onActiveThumbnail}
      >
        <img
          className={`${activeThumbnailClassName}`}
          alt={thumbnailAltText}
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default ThumbnaillItem
