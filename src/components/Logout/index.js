/* eslint-disable react/button-has-type */
// Write your code here
import './index.css'

const Logout = props => {
  const {onPress} = props
  return (
    <button className="logout" onClick={onPress}>
      Logout
    </button>
  )
}

export default Logout
