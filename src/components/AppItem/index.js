// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails
  return (
    <>
      <li className="project-item-container">
        <img className="project-item-image" src={imageUrl} alt={appName} />
        <p className="project-item-title">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
