// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, publishedDate, description} = blogDetails
  return (
    <div className="list-item-container">
      <div className="title-time-container">
        <h1 className="title">{title}</h1>
        <p className="time">{publishedDate}</p>
      </div>
      <p className="description">{description} </p>
    </div>
  )
}
export default BlogItem
