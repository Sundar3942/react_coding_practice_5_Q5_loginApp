/* eslint-disable react/button-has-type */
// Write your code here
import './index.css'

const Login = props => {
  const {onPress} = props
  return (
    <button className="login" onClick={onPress}>
      Login
    </button>
  )
}

export default Login
