// Write your code here
import './index.css'
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login/index'
import Logout from '../Logout/index'

class Home extends Component {
  state = {
    login: false,
  }

  onLogout = () => {
    this.setState({login: false})
  }

  onLogin = () => {
    this.setState({login: true})
  }

  render() {
    const {login} = this.state
    return (
      <div className="page">
        <Message loginState={login} />
        {login ? (
          <Logout onPress={this.onLogout} />
        ) : (
          <Login onPress={this.onLogin} />
        )}
      </div>
    )
  }
}

export default Home
