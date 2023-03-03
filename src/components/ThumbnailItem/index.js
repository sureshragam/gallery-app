// Write your code here.
import './index.css'

function ThumbnailItem(props) {
  const {thumbnailUrl, onClickThumbnail, id, thumbnailAltText} = props

  const onThumbnail = () => {
    onClickThumbnail(id)
  }

  return (
    <li>
      <button type="button" onClick={onThumbnail}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
