// Write your code here
import './index.css'

const Message = props => {
  const {loginState} = props

  return loginState ? (
    <h1 className="message">Welcome User</h1>
  ) : (
    <h1 className="message">Please Login</h1>
  )
}

export default Message
